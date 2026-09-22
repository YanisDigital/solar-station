/* =========================================================
   VOLTARIA · page behaviour
   Header, mobile menu, scroll reveals, counters, savings
   calculator, reviews slider, FAQ accordion, demo modal,
   form validation.
   ========================================================= */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var t = function (k) { return window.I18N ? window.I18N.t(k) : k; };
  var locale = function () { return window.I18N ? window.I18N.locale : 'uk-UA'; };

  function nf(value, digits) {
    try {
      return new Intl.NumberFormat(locale(), {
        minimumFractionDigits: digits || 0,
        maximumFractionDigits: digits || 0
      }).format(value);
    } catch (e) {
      return String(value);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {

    /* ---------------- header ---------------- */
    var head = document.getElementById('siteHead');
    function onScroll() { head.classList.toggle('is-stuck', window.pageYOffset > 24); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------------- mobile menu ---------------- */
    var burger = document.getElementById('burger');
    var nav = document.getElementById('nav');
    function closeMenu() {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    }
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') closeMenu(); });

    /* ---------------- enters-viewport watchers ----------------
       Content visibility hangs off this, so it has two independent triggers:
       an IntersectionObserver (precise, cheap) and a throttled geometry sweep
       on scroll/resize/visibility. Each fires a watcher at most once, and
       either one alone is enough to reveal the page.
    ----------------------------------------------------------- */
    var watchers = [];
    var tick;

    var io = ('IntersectionObserver' in window)
      ? new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) { if (entry.isIntersecting) trigger(entry.target); });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px' })
      : null;

    function watch(el, fire) {
      watchers.push({ el: el, fire: fire, done: false });
      if (io) io.observe(el);
    }

    function trigger(el) {
      for (var i = 0; i < watchers.length; i++) {
        var w = watchers[i];
        if (w.el !== el) continue;
        if (w.done) return;
        w.done = true;
        if (io) io.unobserve(el);
        w.fire(el);
        return;
      }
    }

    function sweep() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      for (var i = 0; i < watchers.length; i++) {
        var w = watchers[i];
        if (w.done) continue;
        var r = w.el.getBoundingClientRect();
        if (r.top < vh - 40 && r.bottom > 0) trigger(w.el);
      }
    }

    function scheduleSweep() { clearTimeout(tick); tick = setTimeout(sweep, 90); }

    window.addEventListener('scroll', scheduleSweep, { passive: true });
    window.addEventListener('resize', scheduleSweep, { passive: true });
    window.addEventListener('load', sweep);
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) scheduleSweep();
    });

    /* ---------------- scroll reveals ---------------- */
    var revealables = document.querySelectorAll('.reveal');
    if (reduced.matches) {
      [].forEach.call(revealables, function (el) { el.classList.add('is-in'); });
    } else {
      [].forEach.call(revealables, function (el, i) {
        el.style.transitionDelay = (i % 4) * 70 + 'ms';
        watch(el, function (node) { node.classList.add('is-in'); });
      });
    }

    /* ---------------- animated counters ---------------- */
    var counters = document.querySelectorAll('[data-count]');

    function paint(el, value) {
      el.textContent = (el.getAttribute('data-prefix') || '') +
        nf(value) +
        (el.getAttribute('data-suffix') || '');
    }

    function run(el) {
      var target = parseFloat(el.getAttribute('data-count'));
      el.setAttribute('data-ran', '1');
      if (reduced.matches) { paint(el, target); return; }
      var start = performance.now(), dur = 1400;
      (function step(now) {
        var p = Math.min((now - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        paint(el, Math.round(target * eased));
        if (p < 1) requestAnimationFrame(step);
      })(start);
    }

    [].forEach.call(counters, function (el) { watch(el, run); });

    sweep();   /* anything already on screen counts up straight away */

    /* ---------------- savings calculator ----------------
       Assumptions, all demo-grade and stated on the page:
       - household tariff 4.32 UAH/kWh
       - Kyiv region yield ~1050 kWh per installed kWp per year
       - ~5 m2 of roof per kWp
       - turnkey cost incl. battery, mildly cheaper per kW at scale
       - EUR reference rate 45 UAH
    ------------------------------------------------------- */
    var TARIFF = 4.32, YIELD = 1050, SQM_PER_KW = 5, EUR = 45;

    var bill = document.getElementById('bill');
    var roof = document.getElementById('roof');
    var billOut = document.getElementById('billOut');
    var roofOut = document.getElementById('roofOut');
    var rPower = document.getElementById('rPower');
    var rSave = document.getElementById('rSave');
    var rCost = document.getElementById('rCost');
    var rBack = document.getElementById('rBack');

    function yearWord(value) {
      if (locale() === 'en-US') return value === 1 ? t('calc.yr1') : t('calc.yr2');
      if (Math.round(value) !== value) return t('calc.yrFrac');
      var n = Math.abs(value) % 100, d = n % 10;
      if (n > 10 && n < 20) return t('calc.yr5');
      if (d === 1) return t('calc.yr1');
      if (d >= 2 && d <= 4) return t('calc.yr2');
      return t('calc.yr5');
    }

    function calculate() {
      var monthly = +bill.value;
      var area = +roof.value;

      var kWhYear = monthly * 12 / TARIFF;
      var needed = kWhYear / YIELD;
      var roofLimit = area / SQM_PER_KW;
      var power = Math.max(2, Math.min(needed, roofLimit, 30));

      var generated = power * YIELD;
      var savings = Math.min(generated, kWhYear) * TARIFF;
      var perKw = 1320 - power * 8;                     /* larger arrays cost less per kW */
      var cost = Math.round(power * perKw / 100) * 100;
      var payback = cost * EUR / savings;

      billOut.textContent = t('calc.uCur') + ' ' + nf(monthly);
      roofOut.textContent = nf(area) + ' ' + t('calc.uSqm');

      rPower.textContent = nf(power, 1) + ' ' + t('calc.uKw');
      rSave.textContent = t('calc.uCur') + ' ' + nf(Math.round(savings / 100) * 100);
      rCost.textContent = '€ ' + nf(cost);
      rBack.textContent = payback > 25
        ? t('calc.capped')
        : nf(payback, 1) + ' ' + yearWord(Math.round(payback * 10) / 10);
    }

    if (bill && roof) {
      bill.addEventListener('input', calculate);
      roof.addEventListener('input', calculate);
      calculate();
    }

    /* Re-render everything that is generated in JS when the language flips. */
    document.addEventListener('langchange', function () {
      if (bill && roof) calculate();
      /* Only reformat counters that already finished — repainting one that has
         not run yet would spoil its count-up. */
      [].forEach.call(counters, function (el) {
        if (el.getAttribute('data-ran')) paint(el, parseFloat(el.getAttribute('data-count')));
      });
      buildDots();
    });

    /* ---------------- reviews slider ---------------- */
    var track = document.getElementById('track');
    var dots = document.getElementById('dots');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var slides = track ? track.children : [];

    function step() {
      if (!slides.length) return 0;
      var a = slides[0].getBoundingClientRect();
      if (slides.length < 2) return a.width;
      return slides[1].getBoundingClientRect().left - a.left;
    }

    function activeIndex() {
      var s = step();
      return s ? Math.round(track.scrollLeft / s) : 0;
    }

    function buildDots() {
      if (!dots) return;
      dots.innerHTML = '';
      for (var i = 0; i < slides.length; i++) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'dot-btn';
        b.setAttribute('aria-label', t('a11y.slide') + ' ' + (i + 1));
        b.setAttribute('data-go', i);
        dots.appendChild(b);
      }
      syncUI();
    }

    function syncUI() {
      if (!track) return;
      var i = activeIndex();
      var kids = dots ? dots.children : [];
      for (var k = 0; k < kids.length; k++) kids[k].classList.toggle('is-on', k === i);
      var max = track.scrollWidth - track.clientWidth - 2;
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= max;
    }

    function glideTo(left) {
      var before = track.scrollLeft;
      var max = track.scrollWidth - track.clientWidth;
      var target = Math.max(0, Math.min(left, max));

      if (reduced.matches) { track.scrollLeft = target; syncUI(); return; }

      track.scrollTo({ left: target, behavior: 'smooth' });
      /* A tab without a running compositor silently drops smooth scrolling,
         so confirm the move landed and jump directly if it did not. */
      setTimeout(function () {
        if (track.scrollLeft === before && before !== target) track.scrollLeft = target;
        syncUI();
      }, 420);
    }

    if (track) {
      buildDots();
      prev.addEventListener('click', function () { glideTo(track.scrollLeft - step()); });
      next.addEventListener('click', function () { glideTo(track.scrollLeft + step()); });
      dots.addEventListener('click', function (e) {
        var b = e.target.closest('[data-go]');
        if (b) glideTo(step() * +b.getAttribute('data-go'));
      });
      track.addEventListener('scroll', function () {
        clearTimeout(track._tid);
        track._tid = setTimeout(syncUI, 90);
      }, { passive: true });
      window.addEventListener('resize', syncUI, { passive: true });
    }

    /* ---------------- FAQ accordion ----------------
       The height tween is driven by a forced reflow rather than rAF, and every
       run is finalised by whichever comes first: transitionend or a timeout.
       A backgrounded tab freezes rAF, and a panel must never be left stuck at
       height:0 with its content unreachable.
    ------------------------------------------------- */
    var ACC_MS = 380;

    function tween(panel, from, to, done) {
      panel.style.height = from;
      panel.classList.add('is-anim');
      void panel.offsetHeight;              /* flush styles so the change animates */
      panel.style.height = to;

      var settled = false;
      function finish() {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        panel.removeEventListener('transitionend', onEnd);
        panel.classList.remove('is-anim');
        panel.style.height = '';
        done();
      }
      function onEnd(e) { if (e.propertyName === 'height') finish(); }

      panel.addEventListener('transitionend', onEnd);
      var timer = setTimeout(finish, ACC_MS + 80);
    }

    [].forEach.call(document.querySelectorAll('.acc__q'), function (btn) {
      var panel = document.getElementById(btn.getAttribute('aria-controls'));

      /* Panels ship open in the markup for no-script visitors; collapse them
         now that the toggle is wired up. */
      panel.hidden = true;
      btn.setAttribute('aria-expanded', 'false');

      btn.addEventListener('click', function () {
        var open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', open ? 'false' : 'true');

        if (open) {
          if (reduced.matches) { panel.hidden = true; return; }
          tween(panel, panel.scrollHeight + 'px', '0px', function () { panel.hidden = true; });
        } else {
          panel.hidden = false;
          if (reduced.matches) return;
          tween(panel, '0px', panel.scrollHeight + 'px', function () {});
        }
      });
    });

    /* ---------------- demo modal ---------------- */
    var modal = document.getElementById('modal');
    var lastFocus = null;

    function openModal() {
      lastFocus = document.activeElement;
      modal.hidden = false;
      document.body.classList.add('is-locked');
      var target = modal.querySelector('.btn');
      if (target) target.focus();
    }

    function closeModal() {
      modal.hidden = true;
      document.body.classList.remove('is-locked');
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    modal.addEventListener('click', function (e) { if (e.target.closest('[data-close]')) closeModal(); });

    document.addEventListener('keydown', function (e) {
      if (modal.hidden) return;
      if (e.key === 'Escape') { closeModal(); return; }
      if (e.key !== 'Tab') return;

      var focusable = modal.querySelectorAll('button, [href], input, select, textarea');
      if (!focusable.length) return;
      var first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });

    /* Every contact route on this site is fictional, so intercept them all. */
    document.addEventListener('click', function (e) {
      var hit = e.target.closest('a[href^="tel:"], a[href^="mailto:"], [data-demo]');
      if (!hit) return;
      e.preventDefault();
      openModal();
    });

    /* ---------------- lead form ---------------- */
    var form = document.getElementById('leadForm');
    var PHONE = /^\+?3?8?0\d{9}$/;

    function mark(input, bad) {
      input.closest('.inp').classList.toggle('is-bad', bad);
      input.setAttribute('aria-invalid', bad ? 'true' : 'false');
    }

    if (form) {
      var fname = document.getElementById('fname');
      var fphone = document.getElementById('fphone');

      form.addEventListener('submit', function (e) {
        e.preventDefault();

        var badName = fname.value.trim().length < 2;
        var badPhone = !PHONE.test(fphone.value.replace(/[\s()\-]/g, ''));
        mark(fname, badName);
        mark(fphone, badPhone);

        if (badName) { fname.focus(); return; }
        if (badPhone) { fphone.focus(); return; }

        openModal();
        form.reset();
      });

      [fname, fphone].forEach(function (input) {
        input.addEventListener('input', function () {
          if (input.closest('.inp').classList.contains('is-bad')) mark(input, false);
        });
      });
    }

    /* ---------------- misc ---------------- */
    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
  });
})();
