const dict = {
  en: {
    'nav.menu': 'Menu',
    'nav.home': 'Home',
    'nav.works': 'My works',
    'nav.contact': 'Contact information',
    'lang.label': 'Language',
    'contact.label': 'Contact',
    'intro.p1': 'Hi! I am a web developer.',
    'intro.p2': 'This portfolio collects projects that show my approach to building websites — from clean layout to thoughtful interactivity and a comfortable interface.',
    'intro.p3': 'I build responsive sites that display correctly and work reliably on any device. I work with HTML, CSS and JavaScript, with a focus on code quality, structure and details. I keep learning modern tools and methods so the result is visually neat and technically solid.',
    'intro.p4': 'For me it is not just about laying out a page, but turning an idea into a clear, functional and convenient product. I aim for clean code, a logical structure and an interface that is easy and comfortable to use.',
    'intro.p5': 'Open to new projects. If you have an idea for a website — write, we will discuss the tasks and bring it to life.',
    'work.sampler.title': 'Sampler',
    'work.sampler.desc': 'This page shows my capabilities.',
    'sampler.tab1': 'Tab 1',
    'sampler.p1': 'This page is a sampler of what I can do in a browser: layout, interaction, and interface details.',
    'sampler.p2': 'New tabs will appear here as I add more examples. Tab 1 is the starting point.',
    'footer.credit': 'This website was created by Norimaru',
  },
  ru: {
    'nav.menu': 'Меню',
    'nav.home': 'Главная',
    'nav.works': 'Мои работы',
    'nav.contact': 'Контактная информация',
    'lang.label': 'Язык',
    'contact.label': 'Контакты',
    'intro.p1': 'Привет! Я веб-разработчик.',
    'intro.p2': 'В этом портфолио собраны проекты, которые показывают мой подход к созданию сайтов — от чистой вёрстки до продуманной интерактивности и удобного интерфейса.',
    'intro.p3': 'Я разрабатываю адаптивные сайты, которые корректно отображаются и стабильно работают на любых устройствах. Работаю с HTML, CSS и JavaScript, уделяя особое внимание качеству кода, структуре и деталям. Постоянно осваиваю современные инструменты и подходы, чтобы результат был не только визуально аккуратным, но и технически надёжным.',
    'intro.p4': 'Для меня важно не просто сверстать страницу, а превратить идею в понятный, функциональный и удобный продукт. Я стремлюсь к чистому коду, логичной структуре и интерфейсу, с которым пользователю легко и комфортно взаимодействовать.',
    'intro.p5': 'Открыт к новым проектам. Если у вас есть идея сайта — напишите, обсудим задачи и воплотим её в жизнь.',
    'work.sampler.title': 'Пробник',
    'work.sampler.desc': 'На этой странице показаны мои возможности.',
    'sampler.tab1': 'Вкладка 1',
    'sampler.p1': 'На этой странице я показываю, что умею делать в браузере: вёрстку, интерактив и детали интерфейса.',
    'sampler.p2': 'Новые вкладки будут появляться по мере добавления примеров. Вкладка 1 — начальная точка.',
    'footer.credit': 'Сайт создан Norimaru',
  },
};

const STORAGE_KEY = 'lang';

const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav__btn');
const lang = document.querySelector('.lang');
const langBtn = document.querySelector('.lang__btn');
const contact = document.querySelector('.contact');
const contactBtn = document.querySelector('.contact__btn');

function getLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'uk') return 'ru';
  if (saved === 'en' || saved === 'ru') return saved;
  const code = (navigator.language || 'en').toLowerCase();
  return code.startsWith('ru') ? 'ru' : 'en';
}

function applyLang(code) {
  const pack = dict[code] || dict.en;
  document.documentElement.lang = code;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const text = pack[el.dataset.i18n];
    if (text) el.textContent = text;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const text = pack[el.dataset.i18nAria];
    if (text) el.setAttribute('aria-label', text);
  });
  document.querySelectorAll('.lang__opt').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === code);
  });
  localStorage.setItem(STORAGE_KEY, code);
}

function openNav() {
  nav.classList.add('is-open');
  navBtn.setAttribute('aria-expanded', 'true');
}
function closeNav() {
  nav.classList.remove('is-open');
  navBtn.setAttribute('aria-expanded', 'false');
}
function toggleNav() {
  if (nav.classList.contains('is-open')) closeNav();
  else openNav();
}
function toggleLang() {
  const open = !lang.classList.contains('is-open');
  lang.classList.toggle('is-open', open);
  langBtn.setAttribute('aria-expanded', String(open));
}
function closeLang() {
  lang.classList.remove('is-open');
  langBtn.setAttribute('aria-expanded', 'false');
}
function toggleContact() {
  const open = !contact.classList.contains('is-open');
  contact.classList.toggle('is-open', open);
  contactBtn.setAttribute('aria-expanded', String(open));
}
function closeContact() {
  contact.classList.remove('is-open');
  contactBtn.setAttribute('aria-expanded', 'false');
}

navBtn.addEventListener('click', () => { toggleNav(); });
langBtn.addEventListener('click', () => { toggleLang(); });
contactBtn.addEventListener('click', () => { toggleContact(); });
document.querySelectorAll('.lang__opt').forEach((btn) => {
  btn.addEventListener('click', () => {
    applyLang(btn.dataset.lang);
    closeLang();
  });
});
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav')) closeNav();
  if (!e.target.closest('.lang')) closeLang();
  if (!e.target.closest('.contact')) closeContact();
});

const sampler = document.querySelector('.sampler');
if (sampler) {
  const tabs = sampler.querySelectorAll('[data-tab]');
  const panels = sampler.querySelectorAll('[data-panel]');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const id = tab.dataset.tab;
      tabs.forEach((t) => t.classList.toggle('is-active', t === tab));
      panels.forEach((p) => p.classList.toggle('is-active', p.dataset.panel === id));
    });
  });
}

applyLang(getLang());
