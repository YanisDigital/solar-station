/* =========================================================
   VOLTARIA · hero
   Four independently moving layers + the day/night "blackout"
   interaction that carries the whole pitch of the page.

   Motion:  one rAF loop, transform-only, paused when off-screen.
   Input:   scroll everywhere, pointer drift on hover devices,
            tap / click / Enter / Space to flip the scene.
   ========================================================= */
(function () {
  'use strict';

  var FACTOR = 0.14;   /* scroll -> layer travel; see .pl bleed in style.css */
  var DRIFT = 22;      /* px of pointer drift at depth 1.0 */

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var canHover = window.matchMedia('(hover: hover) and (pointer: fine)');

  document.addEventListener('DOMContentLoaded', function () {
    var stage = document.getElementById('stage');
    var hint = document.getElementById('sceneHint');
    if (!stage) return;

    var layers = [].map.call(stage.querySelectorAll('.pl'), function (el) {
      return { el: el, depth: parseFloat(el.getAttribute('data-depth')) || 0 };
    });

    /* ---------- scene toggle ---------- */
    var root = document.documentElement;

    function setScene(night) {
      root.setAttribute('data-scene', night ? 'night' : 'day');
      if (hint) {
        var key = night ? 'hero.hintNight' : 'hero.hintDay';
        hint.setAttribute('data-i18n', key);
        hint.setAttribute('aria-pressed', night ? 'true' : 'false');
        if (window.I18N) hint.textContent = window.I18N.t(key);
      }
    }

    function toggleScene() {
      setScene(root.getAttribute('data-scene') !== 'night');
    }

    /* The button carries the semantics and is the only target on touch, where
       the headline covers most of the stage. */
    if (hint) hint.addEventListener('click', toggleScene);

    stage.addEventListener('click', function (e) {
      /* Links, the button itself and the headline block keep their own behaviour. */
      if (e.target.closest('a, button, input, select, .hero__copy')) return;
      toggleScene();
    });

    /* ---------- parallax ---------- */
    var scrollY = 0, px = 0, py = 0, tx = 0, ty = 0;
    var visible = true, queued = false;

    function render() {
      queued = false;
      /* ease the pointer drift so it trails the cursor instead of snapping */
      px += (tx - px) * 0.08;
      py += (ty - py) * 0.08;

      for (var i = 0; i < layers.length; i++) {
        var d = layers[i].depth;
        var y = -scrollY * d * FACTOR + py * d;
        var x = px * d;
        layers[i].el.style.transform = 'translate3d(' + x.toFixed(2) + 'px,' + y.toFixed(2) + 'px,0)';
      }

      if (Math.abs(tx - px) > 0.1 || Math.abs(ty - py) > 0.1) request();
    }

    function request() {
      if (queued || !visible || reduced.matches) return;
      queued = true;
      requestAnimationFrame(render);
    }

    function onScroll() {
      scrollY = window.pageYOffset || document.documentElement.scrollTop;
      request();
    }

    function onPointer(e) {
      var r = stage.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * -DRIFT * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * -DRIFT;
      request();
    }

    function clearLayers() {
      for (var i = 0; i < layers.length; i++) layers[i].el.style.transform = '';
    }

    /* Only run the loop while the hero is actually on screen. */
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        if (visible) request();
      }, { rootMargin: '120px' }).observe(stage);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    if (canHover.matches) {
      stage.addEventListener('pointermove', onPointer, { passive: true });
      stage.addEventListener('pointerleave', function () { tx = 0; ty = 0; request(); }, { passive: true });
    }

    function syncMotion() {
      if (reduced.matches) clearLayers();
      else onScroll();
    }
    if (reduced.addEventListener) reduced.addEventListener('change', syncMotion);

    syncMotion();

    /* Keep the hint in the right language after a language switch. */
    document.addEventListener('langchange', function () {
      if (hint && window.I18N) hint.textContent = window.I18N.t(hint.getAttribute('data-i18n'));
    });
  });
})();
