/* =========================================================
   VOLTARIA · i18n
   Flat dictionary, UA is default and fallback.
   Markup contract:
     data-i18n="key"                  -> textContent
     data-i18n-attr="attr:key;attr:key" -> attribute value
   ========================================================= */
(function (w) {
  'use strict';

  var DICT = {
    ua: {
      'meta.title': 'VOLTARIA — сонячні станції під ключ для приватних будинків у Київській області',
      'meta.desc': 'Проєктування, монтаж та обслуговування автономних сонячних станцій для приватних будинків у передмісті Києва. Повна енергонезалежність за 14 днів. Гарантія 25 років.',
      'meta.ogTitle': 'VOLTARIA — світло, яке ніхто не вимкне',
      'meta.ogLocale': 'uk_UA',

      'a11y.skip': 'Перейти до основного вмісту',
      'a11y.nav': 'Головна навігація',
      'a11y.lang': 'Мова сайту',
      'a11y.menu': 'Меню',
      'a11y.scene': 'Інтерактивна сцена: вимкнути світло в селищі',
      'a11y.prev': 'Попередній відгук',
      'a11y.next': 'Наступний відгук',
      'a11y.dots': 'Перемикання відгуків',
      'a11y.close': 'Закрити',
      'a11y.slide': 'Відгук',

      'nav.problem': 'Проблема',
      'nav.how': 'Як це працює',
      'nav.packages': 'Пакети',
      'nav.calc': 'Калькулятор',
      'nav.cases': 'Обʼєкти',
      'nav.faq': 'Питання',
      'cta.head': 'Розрахувати',

      'hero.eyebrow': 'Сонячні станції під ключ · Київська область',
      'hero.t1': 'Світло,',
      'hero.t2': 'яке ніхто не вимкне',
      'hero.sub': 'Проєктуємо, монтуємо й обслуговуємо автономні сонячні станції для приватних будинків у передмісті Києва. Чотирнадцять днів — і чужі графіки відключень вас більше не стосуються.',
      'hero.cta1': 'Розрахувати мою станцію',
      'hero.cta2': 'Подивитись обʼєкти',
      'hero.s1v': '12 400',
      'hero.s1l': 'кВт·год на рік',
      'hero.s2v': '25',
      'hero.s2l': 'років гарантії на панелі',
      'hero.s3v': '3',
      'hero.s3l': 'дні монтажу',
      'hero.hintDay': 'Торкніться — у селищі згасне світло',
      'hero.hintNight': 'Ваш дім світиться. Торкніться ще раз',
      'hero.badge': 'Ви — на власній станції',

      'pain.eyebrow': 'Ціна темряви',
      'pain.title': 'Скільки насправді коштує чужий графік відключень',
      'pain.lead': 'Генератор — це не незалежність. Це оренда світла за найвищою ціною: пальне, шум, сервіс і черга на заправці щоразу, коли вимикають.',
      'pain.c1t': 'годин без світла за рік',
      'pain.c1d': 'Це 50 повних діб. Холодильник, свердловина, котел, інтернет і робота з дому — усе зупиняється за чужим розкладом.',
      'pain.c2t': 'зростання тарифу за три роки',
      'pain.c2d': 'Тариф переглядають, ваш будинок — ні. Кожен наступний кіловат із мережі коштує дорожче за попередній.',
      'pain.c3t': 'генератор і пальне за сезон',
      'pain.c3d': 'Гроші, які згоряють буквально. Та сама сума, вкладена в станцію, працює на вас наступні 25 років.',
      'pain.note': 'Цифри ілюстративні та наведені для демонстрації кейсу.',

      'how.eyebrow': 'Як це працює',
      'how.title': 'Від першого дзвінка до автономії — чотирнадцять днів',
      'how.s1t': 'Аудит будинку',
      'how.s1d': 'Виїзд інженера, заміри даху й нахилу, аналіз рахунків за 12 місяців. Ви отримуєте чесну відповідь, скільки кВт вам справді потрібно.',
      'how.s2t': 'Проєкт і кошторис',
      'how.s2d': '3D-схема розміщення панелей, розрахунок генерації по місяцях, специфікація до останнього конектора. Ціна фіксується договором.',
      'how.s3t': 'Монтаж',
      'how.s3d': 'Своя бригада, без субпідряду. Кріплення без пошкодження покрівлі, інвертор і накопичувач у технічному приміщенні, прихована кабельна траса.',
      'how.s4t': 'Запуск і моніторинг',
      'how.s4d': 'Пусконалагодження, документи, застосунок з генерацією в реальному часі. Сервіс і дистанційна діагностика — на весь строк гарантії.',
      'how.day': 'день',
      'how.days': 'дні',

      'pack.eyebrow': 'Пакети',
      'pack.title': 'Три рівні незалежності',
      'pack.lead': 'Усі комплекти — з накопичувачем. Станція без батареї гасне разом із мережею, а це не те, за чим ви прийшли.',
      'pack.kw': 'кВт',
      'pack.best': 'Обирають найчастіше',
      'pack.cta': 'Обрати пакет',
      'pack.p1n': 'Старт',
      'pack.p1f': 'Будинок до 120 м², базові потреби',
      'pack.p1a': '12 панелей N-type, 460 Вт',
      'pack.p1b': 'Гібридний інвертор 5 кВт',
      'pack.p1c': 'Накопичувач LiFePO₄ 5 кВт·год',
      'pack.p1d': 'Світло, вода, холодильник, інтернет',
      'pack.p1e': 'Автономія до 8 годин',
      'pack.p2n': 'Оптимум',
      'pack.p2f': 'Будинок 120–250 м², родина з дітьми',
      'pack.p2a': '22 панелі N-type, 460 Вт',
      'pack.p2b': 'Гібридний інвертор 10 кВт',
      'pack.p2c': 'Накопичувач LiFePO₄ 15 кВт·год',
      'pack.p2d': 'Тепловий насос і свердловина в резерві',
      'pack.p2e': 'Автономія до 20 годин',
      'pack.p3n': 'Автономія',
      'pack.p3f': 'Будинок від 250 м², повна незалежність',
      'pack.p3a': '34 панелі N-type, 460 Вт',
      'pack.p3b': 'Два інвертори, трифазна мережа',
      'pack.p3c': 'Накопичувач LiFePO₄ 30 кВт·год',
      'pack.p3d': 'Басейн, клімат, зарядка електромобіля',
      'pack.p3e': 'Автономія до 3 діб',
      'pack.note': 'Ціни демонстраційні: це портфоліо-кейс, а не комерційна пропозиція.',

      'calc.eyebrow': 'Калькулятор',
      'calc.title': 'Порахуйте, коли станція себе окупить',
      'calc.lead': 'Пересуньте два повзунки — решту зробить арифметика. Без форми, без телефону, без менеджера.',
      'calc.billLab': 'Рахунок за електрику на місяць',
      'calc.roofLab': 'Вільна площа даху',
      'calc.rPower': 'Рекомендована потужність',
      'calc.rSave': 'Економія за рік',
      'calc.rCost': 'Орієнтовна вартість',
      'calc.rBack': 'Окупність',
      'calc.cta': 'Отримати точний розрахунок',
      'calc.note': 'Оцінка за середньою інсоляцією Київської області. Точні цифри — після аудиту.',
      'calc.uKw': 'кВт',
      'calc.uSqm': 'м²',
      'calc.uCur': '₴',
      'calc.yr1': 'рік',
      'calc.yr2': 'роки',
      'calc.yr5': 'років',
      'calc.yrFrac': 'року',
      'calc.capped': 'понад 25 років',

      'cases.eyebrow': 'Обʼєкти',
      'cases.title': 'Передмістя, яке вже не помічає відключень',
      'cases.c1p': 'Козин',
      'cases.c1a': 'Двоповерховий приватний будинок у Козині із сонячними панелями на схилі даху',
      'cases.c2p': 'Ірпінь',
      'cases.c2a': 'Сонячні панелі на даху приватного будинку в Ірпені',
      'cases.c3p': 'Буча',
      'cases.c3a': 'Монтажник закріплює сонячну панель на покрівлі будинку в Бучі',
      'cases.c4p': 'Вишгород',
      'cases.c4a': 'Гібридний інвертор і накопичувач енергії в технічному приміщенні будинку',
      'cases.c5p': 'Обухів',
      'cases.c5a': 'Великий приватний будинок в Обухові з масивом сонячних панелей на даху',

      'rev.eyebrow': 'Відгуки',
      'rev.title': 'Що кажуть господарі',
      'rev.note': 'Відгуки вигадані для демонстрації портфоліо-кейсу.',
      'rev.rate5': 'Оцінка 5 з 5',
      'rev.rate4': 'Оцінка 4 з 5',
      'rev.q1': 'Три зими на генераторі — і я досі памʼятаю той запах. Тепер про відключення дізнаюся з новин, а не з холодильника. Монтаж зайняв три дні, покрівлю не зачепили.',
      'rev.n1': 'Андрій Ковальчук',
      'rev.i1': 'АК',
      'rev.p1': 'Ірпінь · 10 кВт · листопад 2024',
      'rev.q2': 'Порівнювала чотири компанії. Тут єдині показали розрахунок генерації по місяцях, включно з грудневим провалом, і не обіцяли казку. Саме через цю чесність і обрала.',
      'rev.n2': 'Олена Демченко',
      'rev.i2': 'ОД',
      'rev.p2': 'Буча · 8 кВт · березень 2025',
      'rev.q3': 'Працюю з дому, зриви дзвінків коштували мені клієнтів. Після запуску станції жодного разу не перепросив за «у нас світло вимкнули». Окупність рахую не грошима, а репутацією.',
      'rev.n3': 'Тарас Мельник',
      'rev.i3': 'ТМ',
      'rev.p3': 'Вишгород · 6,4 кВт · липень 2024',
      'rev.q4': 'Затримали старт на тиждень через постачання інвертора — чесно попередили заздалегідь і зробили знижку. Сама станція працює бездоганно вже другий сезон.',
      'rev.n4': 'Ірина Соколова',
      'rev.i4': 'ІС',
      'rev.p4': 'Обухів · 15 кВт · вересень 2024',
      'rev.q5': 'Найкраще — застосунок. Видно кожен кіловат: скільки згенерували, скільки в батареї, скільки віддали. Діти влаштували змагання, хто менше витратить.',
      'rev.n5': 'Сергій Бондаренко',
      'rev.i5': 'СБ',
      'rev.p5': 'Козин · 14,2 кВт · травень 2025',

      'faq.eyebrow': 'Питання',
      'faq.title': 'Те, про що питають на першій зустрічі',
      'faq.q1': 'А якщо тиждень стоїть хмарна погода?',
      'faq.a1': 'Панелі працюють і в хмарну погоду — просто віддають менше, приблизно 15–25 % від пікової потужності. Саме для таких днів у кожному нашому комплекті є накопичувач: він вирівнює провали й тримає будинок на плаву, поки генерація низька.',
      'faq.q2': 'Що відбувається взимку та під снігом?',
      'faq.a2': 'Грудень і січень дають близько 25–30 % від літньої генерації — це закладено в розрахунок від початку. Панелі ставимо під кутом 30–35°, тому сухий сніг сходить сам, а скло під ним не пошкоджується.',
      'faq.q3': 'За скільки станція окупиться?',
      'faq.a3': 'За поточних тарифів — від 8 до 12 років, залежно від споживання: комплект із накопичувачем коштує дорожче, ніж звичайна мережева система. Але порівнювати варто не з нулем, а з витратами на генератор і пальне — у цьому порівнянні станція виходить у плюс значно раніше.',
      'faq.q4': 'Чи можна продавати надлишок у мережу?',
      'faq.a4': 'Так, гібридний інвертор це дозволяє, і ми готуємо документи для підключення. Але ми ніколи не будуємо економіку проєкту на цьому: пріоритет — спершу ваш будинок і батарея, надлишок — уже потім.',
      'faq.q5': 'Станція працює, коли мережа знеструмлена?',
      'faq.a5': 'Так — і це головна відмінність від звичайної мережевої системи. Гібридний інвертор з накопичувачем переходить в автономний режим за 20 мілісекунд: компʼютер не перезавантажується, котел не збивається, ви навіть не помічаєте переходу.',
      'faq.q6': 'Яке обслуговування потрібне?',
      'faq.a6': 'Мийка панелей раз на рік і щорічна перевірка кріплень та зʼєднань. Стан системи ми бачимо дистанційно через моніторинг, тож про більшість проблем дізнаємося раніше за вас і приїжджаємо самі.',

      'form.eyebrow': 'Заявка',
      'form.title': 'Почнімо з безкоштовного аудиту',
      'form.lead': 'Інженер приїде, зробить заміри й покаже розрахунок. Якщо станція вам не вигідна — ми чесно про це скажемо. Це теж результат.',
      'form.b1': 'Виїзд і розрахунок — безкоштовно',
      'form.b2': 'Фіксована ціна в договорі',
      'form.b3': 'Своя бригада, без субпідряду',
      'form.name': 'Імʼя',
      'form.namePh': 'Як до вас звертатись',
      'form.eName': 'Вкажіть, будь ласка, імʼя',
      'form.phone': 'Телефон',
      'form.ePhone': 'Потрібен номер у форматі +380…',
      'form.place': 'Населений пункт',
      'form.placePh': 'Ірпінь, Буча, Козин…',
      'form.type': 'Тип обʼєкта',
      'form.t1': 'Будинок у процесі будівництва',
      'form.t2': 'Житловий будинок',
      'form.t3': 'Є генератор, хочу замінити',
      'form.t4': 'Є станція, потрібне розширення',
      'form.submit': 'Замовити аудит',
      'form.consent': 'Натискаючи кнопку, ви погоджуєтесь на обробку даних. Це демонстраційна форма — нічого нікуди не надсилається.',

      'foot.slogan': 'Ваш дім — ваша станція.',
      'foot.navLab': 'Розділи сайту',
      'foot.h1': 'Розділи',
      'foot.h2': 'Контакти',
      'foot.h3': 'Соцмережі',
      'foot.addr': 'Київська обл., Ірпінь, вул. Прикладна, 1',
      'foot.hours': 'Пн–Сб, 09:00–19:00',
      'foot.disclaimer': 'VOLTARIA — вигадана компанія. Цей сайт створено як демонстраційний портфоліо-кейс: контакти не працюють, ціни та відгуки ілюстративні.',
      'foot.made': 'демо-проєкт',

      'modal.title': 'Це демонстраційний сайт',
      'modal.text': 'Компанії VOLTARIA не існує. Лендинг створено як портфоліо-кейс, тому телефон, пошта, соцмережі й форма заявки не працюють — жодні дані нікуди не надсилаються.',
      'modal.sub': 'Дякуємо за перегляд — це приклад роботи для портфоліо.',
      'modal.btn': 'Зрозуміло'
    },

    en: {
      'meta.title': 'VOLTARIA — turnkey solar power systems for private homes near Kyiv',
      'meta.desc': 'Design, installation and service of off-grid solar power systems for private homes in the Kyiv suburbs. Full energy independence in 14 days. 25-year warranty.',
      'meta.ogTitle': 'VOLTARIA — light no one can switch off',
      'meta.ogLocale': 'en_US',

      'a11y.skip': 'Skip to main content',
      'a11y.nav': 'Main navigation',
      'a11y.lang': 'Site language',
      'a11y.menu': 'Menu',
      'a11y.scene': 'Interactive scene: cut the power in the village',
      'a11y.prev': 'Previous review',
      'a11y.next': 'Next review',
      'a11y.dots': 'Review navigation',
      'a11y.close': 'Close',
      'a11y.slide': 'Review',

      'nav.problem': 'The problem',
      'nav.how': 'How it works',
      'nav.packages': 'Packages',
      'nav.calc': 'Calculator',
      'nav.cases': 'Projects',
      'nav.faq': 'FAQ',
      'cta.head': 'Get a quote',

      'hero.eyebrow': 'Turnkey solar systems · Kyiv region',
      'hero.t1': 'Light',
      'hero.t2': 'no one can switch off',
      'hero.sub': 'We design, install and service off-grid solar systems for private homes in the Kyiv suburbs. Fourteen days — and somebody else’s blackout schedule stops being your problem.',
      'hero.cta1': 'Size my system',
      'hero.cta2': 'See our projects',
      'hero.s1v': '12,400',
      'hero.s1l': 'kWh generated per year',
      'hero.s2v': '25',
      'hero.s2l': 'year warranty on panels',
      'hero.s3v': '3',
      'hero.s3l': 'days to install',
      'hero.hintDay': 'Tap — and the village goes dark',
      'hero.hintNight': 'Your house is still lit. Tap again',
      'hero.badge': 'You are running on your own grid',

      'pain.eyebrow': 'The cost of darkness',
      'pain.title': 'What somebody else’s blackout schedule really costs you',
      'pain.lead': 'A generator is not independence. It is renting electricity at the highest possible price: fuel, noise, servicing, and a queue at the petrol station every single time the grid drops.',
      'pain.c1t': 'hours without power per year',
      'pain.c1d': 'That is 50 full days. Fridge, well pump, boiler, internet and working from home — all of it stops on someone else’s timetable.',
      'pain.c2t': 'tariff growth over three years',
      'pain.c2d': 'Tariffs get revised, your house does not. Every next kilowatt from the grid costs more than the last one.',
      'pain.c3t': 'generator and fuel per season',
      'pain.c3d': 'Money that literally burns. The same sum invested in a solar system keeps working for you for the next 25 years.',
      'pain.note': 'Figures are illustrative and shown for this demo case study.',

      'how.eyebrow': 'How it works',
      'how.title': 'From the first call to full autonomy — fourteen days',
      'how.s1t': 'Site audit',
      'how.s1d': 'An engineer visits, measures the roof and its pitch, and reviews 12 months of your bills. You get an honest answer on how many kW you actually need.',
      'how.s2t': 'Design and quote',
      'how.s2d': 'A 3D panel layout, month-by-month generation forecast and a bill of materials down to the last connector. The price is locked in the contract.',
      'how.s3t': 'Installation',
      'how.s3d': 'Our own crew, no subcontractors. Mounting without damaging the roof, inverter and battery in the utility room, cable runs kept out of sight.',
      'how.s4t': 'Commissioning and monitoring',
      'how.s4d': 'Start-up, paperwork, and an app with real-time generation. Service and remote diagnostics run for the whole warranty period.',
      'how.day': 'day',
      'how.days': 'days',

      'pack.eyebrow': 'Packages',
      'pack.title': 'Three levels of independence',
      'pack.lead': 'Every package ships with a battery. A system without one dies together with the grid — and that is not what you came here for.',
      'pack.kw': 'kW',
      'pack.best': 'Most chosen',
      'pack.cta': 'Choose this package',
      'pack.p1n': 'Start',
      'pack.p1f': 'Home up to 120 m², essential loads',
      'pack.p1a': '12 N-type panels, 460 W',
      'pack.p1b': '5 kW hybrid inverter',
      'pack.p1c': '5 kWh LiFePO₄ battery',
      'pack.p1d': 'Lighting, water, fridge, internet',
      'pack.p1e': 'Up to 8 hours off-grid',
      'pack.p2n': 'Optimum',
      'pack.p2f': 'Home of 120–250 m², family with kids',
      'pack.p2a': '22 N-type panels, 460 W',
      'pack.p2b': '10 kW hybrid inverter',
      'pack.p2c': '15 kWh LiFePO₄ battery',
      'pack.p2d': 'Heat pump and well pump on backup',
      'pack.p2e': 'Up to 20 hours off-grid',
      'pack.p3n': 'Autonomy',
      'pack.p3f': 'Home from 250 m², total independence',
      'pack.p3a': '34 N-type panels, 460 W',
      'pack.p3b': 'Two inverters, three-phase supply',
      'pack.p3c': '30 kWh LiFePO₄ battery',
      'pack.p3d': 'Pool, climate control, EV charging',
      'pack.p3e': 'Up to 3 days off-grid',
      'pack.note': 'Prices are illustrative: this is a portfolio case study, not a commercial offer.',

      'calc.eyebrow': 'Calculator',
      'calc.title': 'See when the system pays for itself',
      'calc.lead': 'Move two sliders — arithmetic does the rest. No form, no phone number, no sales call.',
      'calc.billLab': 'Monthly electricity bill',
      'calc.roofLab': 'Available roof area',
      'calc.rPower': 'Recommended capacity',
      'calc.rSave': 'Savings per year',
      'calc.rCost': 'Estimated cost',
      'calc.rBack': 'Payback period',
      'calc.cta': 'Get an exact calculation',
      'calc.note': 'Estimated at the average solar irradiance of the Kyiv region. Exact figures come after the audit.',
      'calc.uKw': 'kW',
      'calc.uSqm': 'm²',
      'calc.uCur': '₴',
      'calc.yr1': 'year',
      'calc.yr2': 'years',
      'calc.yr5': 'years',
      'calc.yrFrac': 'years',
      'calc.capped': 'over 25 years',

      'cases.eyebrow': 'Projects',
      'cases.title': 'The suburbs that stopped noticing blackouts',
      'cases.c1p': 'Kozyn',
      'cases.c1a': 'Two-storey private house in Kozyn with solar panels on the roof slope',
      'cases.c2p': 'Irpin',
      'cases.c2a': 'Solar panels on the roof of a private house in Irpin',
      'cases.c3p': 'Bucha',
      'cases.c3a': 'An installer securing a solar panel on a house roof in Bucha',
      'cases.c4p': 'Vyshhorod',
      'cases.c4a': 'Hybrid inverter and battery storage in the utility room of a house',
      'cases.c5p': 'Obukhiv',
      'cases.c5a': 'Large private house in Obukhiv with a full array of roof solar panels',

      'rev.eyebrow': 'Reviews',
      'rev.title': 'What the owners say',
      'rev.note': 'Reviews are fictional and written for this portfolio demo.',
      'rev.rate5': 'Rated 5 out of 5',
      'rev.rate4': 'Rated 4 out of 5',
      'rev.q1': 'Three winters on a generator — I can still smell it. Now I hear about blackouts on the news, not from my fridge. The install took three days and the roof came out untouched.',
      'rev.n1': 'Andrii Kovalchuk',
      'rev.i1': 'AK',
      'rev.p1': 'Irpin · 10 kW · November 2024',
      'rev.q2': 'I compared four companies. These were the only ones who showed month-by-month generation, December slump included, and did not promise miracles. That honesty is why I picked them.',
      'rev.n2': 'Olena Demchenko',
      'rev.i2': 'OD',
      'rev.p2': 'Bucha · 8 kW · March 2025',
      'rev.q3': 'I work from home, and dropped calls were costing me clients. Since the system went live I have not once apologised for "our power is out". I measure the payback in reputation, not money.',
      'rev.n3': 'Taras Melnyk',
      'rev.i3': 'TM',
      'rev.p3': 'Vyshhorod · 6.4 kW · July 2024',
      'rev.q4': 'They pushed the start back by a week because of inverter supply — warned me honestly in advance and gave a discount. The system itself has run flawlessly for a second season now.',
      'rev.n4': 'Iryna Sokolova',
      'rev.i4': 'IS',
      'rev.p4': 'Obukhiv · 15 kW · September 2024',
      'rev.q5': 'The app is the best part. Every kilowatt is visible: generated, stored, exported. My kids turned it into a contest over who uses less.',
      'rev.n5': 'Serhii Bondarenko',
      'rev.i5': 'SB',
      'rev.p5': 'Kozyn · 14.2 kW · May 2025',

      'faq.eyebrow': 'FAQ',
      'faq.title': 'What people ask at the first meeting',
      'faq.q1': 'What if it stays cloudy for a week?',
      'faq.a1': 'Panels still work under cloud — they just deliver less, roughly 15–25 % of peak output. That is exactly what the battery in every one of our packages is for: it smooths out the dips and keeps the house running while generation is low.',
      'faq.q2': 'What happens in winter and under snow?',
      'faq.a2': 'December and January deliver around 25–30 % of summer output — that is built into the calculation from the start. We mount panels at 30–35°, so dry snow slides off on its own and the glass underneath is not damaged.',
      'faq.q3': 'How long until it pays for itself?',
      'faq.a3': 'At current tariffs, between 8 and 12 years depending on consumption — a package with a battery costs more than a plain grid-tied system. But the right comparison is not against zero; it is against generator and fuel costs, and on that basis the system turns positive considerably sooner.',
      'faq.q4': 'Can I sell surplus back to the grid?',
      'faq.a4': 'Yes, the hybrid inverter supports it and we prepare the paperwork. But we never build a project’s economics on that: the house and the battery come first, surplus comes after.',
      'faq.q5': 'Does the system work when the grid is down?',
      'faq.a5': 'Yes — and that is the key difference from an ordinary grid-tied system. A hybrid inverter with a battery switches to off-grid mode in 20 milliseconds: your computer does not reboot, the boiler does not reset, you do not even notice the transition.',
      'faq.q6': 'What maintenance does it need?',
      'faq.a6': 'Cleaning the panels once a year, plus an annual check of mounts and connections. We see the system state remotely through monitoring, so we usually learn about problems before you do and come out ourselves.',

      'form.eyebrow': 'Request',
      'form.title': 'Start with a free site audit',
      'form.lead': 'An engineer comes out, takes the measurements and walks you through the numbers. If a solar system is not worth it for you, we will say so plainly. That is a result too.',
      'form.b1': 'Visit and calculation are free',
      'form.b2': 'Fixed price written into the contract',
      'form.b3': 'Our own crew, no subcontractors',
      'form.name': 'Name',
      'form.namePh': 'What should we call you',
      'form.eName': 'Please enter your name',
      'form.phone': 'Phone',
      'form.ePhone': 'A number in +380… format is required',
      'form.place': 'Town or village',
      'form.placePh': 'Irpin, Bucha, Kozyn…',
      'form.type': 'Property type',
      'form.t1': 'House still under construction',
      'form.t2': 'Occupied family home',
      'form.t3': 'Have a generator, want to replace it',
      'form.t4': 'Have a system, need an upgrade',
      'form.submit': 'Book the audit',
      'form.consent': 'By submitting you agree to data processing. This is a demo form — nothing is sent anywhere.',

      'foot.slogan': 'Your home is your grid.',
      'foot.navLab': 'Site sections',
      'foot.h1': 'Sections',
      'foot.h2': 'Contacts',
      'foot.h3': 'Social',
      'foot.addr': 'Kyiv region, Irpin, 1 Prykladna St.',
      'foot.hours': 'Mon–Sat, 09:00–19:00',
      'foot.disclaimer': 'VOLTARIA is a fictional company. This site was built as a demonstration portfolio case study: the contacts do not work, and prices and reviews are illustrative.',
      'foot.made': 'demo project',

      'modal.title': 'This is a demo website',
      'modal.text': 'VOLTARIA does not exist. This landing page was built as a portfolio case study, so the phone number, email, social links and request form do not work — no data is sent anywhere.',
      'modal.sub': 'Thanks for taking a look — this is a portfolio sample.',
      'modal.btn': 'Got it'
    }
  };

  var LANGS = { ua: 'uk', en: 'en' };
  var STORE = 'voltaria.lang';
  var current = 'ua';

  /* Own-property check only. A plain `DICT[v]` truthiness test accepts
     inherited keys, so ?lang=constructor would pass validation and end up
     written into <html lang> and persisted to localStorage. */
  function isLang(v) {
    return typeof v === 'string' && Object.prototype.hasOwnProperty.call(DICT, v);
  }

  function has(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }

  function t(key) {
    var d = DICT[current];
    if (d && has(d, key) && d[key] != null) return d[key];
    return has(DICT.ua, key) && DICT.ua[key] != null ? DICT.ua[key] : key;
  }

  function readStored() {
    try { return localStorage.getItem(STORE); } catch (e) { return null; }
  }
  function writeStored(v) {
    try { localStorage.setItem(STORE, v); } catch (e) { /* private mode */ }
  }

  /* Keeps the JSON-LD in sync so the markup never contradicts the visible page. */
  function syncSchema() {
    var node = document.getElementById('ldBiz');
    if (!node) return;
    try {
      var data = JSON.parse(node.textContent);
      data.description = t('meta.desc');
      node.textContent = JSON.stringify(data, null, 2);
    } catch (e) { /* leave the original markup untouched */ }
  }

  function apply(lang) {
    current = isLang(lang) ? lang : 'ua';

    document.documentElement.lang = LANGS[current];
    document.documentElement.setAttribute('data-lang', current);

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = t(nodes[i].getAttribute('data-i18n'));
    }

    var attrNodes = document.querySelectorAll('[data-i18n-attr]');
    for (var j = 0; j < attrNodes.length; j++) {
      var pairs = attrNodes[j].getAttribute('data-i18n-attr').split(';');
      for (var k = 0; k < pairs.length; k++) {
        var bits = pairs[k].split(':');
        if (bits.length === 2) attrNodes[j].setAttribute(bits[0].trim(), t(bits[1].trim()));
      }
    }

    var btns = document.querySelectorAll('[data-lang-btn]');
    for (var m = 0; m < btns.length; m++) {
      var on = btns[m].getAttribute('data-lang-btn') === current;
      btns[m].classList.toggle('is-on', on);
      btns[m].setAttribute('aria-pressed', on ? 'true' : 'false');
    }

    syncSchema();
    writeStored(current);
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: current } }));
  }

  function initial() {
    var q = new URLSearchParams(location.search).get('lang');
    if (isLang(q)) return q;
    var saved = readStored();
    if (isLang(saved)) return saved;
    return 'ua';
  }

  w.I18N = {
    t: t,
    apply: apply,
    get lang() { return current; },
    get locale() { return current === 'en' ? 'en-US' : 'uk-UA'; }
  };

  document.addEventListener('DOMContentLoaded', function () {
    apply(initial());
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-lang-btn]');
      if (btn) apply(btn.getAttribute('data-lang-btn'));
    });
  });
})(window);
