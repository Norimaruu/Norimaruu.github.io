const dict = {
  en: {
    'nav.menu': 'Menu',
    'nav.home': 'Home',
    'nav.about': 'About me',
    'nav.works': 'My works',
    'nav.contact': 'Contact information',
    'lang.label': 'Language',
    'contact.label': 'Contact',
    'intro.lead': 'Website development.',
    'intro.skills': 'Skills',
    'footer.credit': 'This website was created by Norimaru',
  },
  uk: {
    'nav.menu': 'Меню',
    'nav.home': 'Головна',
    'nav.about': 'Про мене',
    'nav.works': 'Мої роботи',
    'nav.contact': 'Контактна інформація',
    'lang.label': 'Мова',
    'contact.label': 'Контакти',
    'intro.lead': 'Розробка сайтів.',
    'intro.skills': 'Навички',
    'footer.credit': 'Сайт створено Norimaru',
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
  if (saved === 'en' || saved === 'uk') return saved;
  const code = (navigator.language || 'en').toLowerCase();
  return code.startsWith('uk') ? 'uk' : 'en';
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

navBtn.addEventListener('click', () => {
  toggleNav();
});

langBtn.addEventListener('click', () => {
  toggleLang();
});

contactBtn.addEventListener('click', () => {
  toggleContact();
});

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

applyLang(getLang());
