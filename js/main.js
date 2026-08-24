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
    'sampler.p1': 'This page is a sampler of what I can do in a browser: layout, interaction, and interface details.',
    'sampler.p2': 'New topics will appear in the menu as I add more examples. Navigation is the first one.',
    'sampler.nav': 'Navigation',
    'footer.credit': 'This website was created by Norimaru',
    'fn.toc.info': 'This page shows how common interface controls work. Pick a name to jump to it.',
    'fn.1.title': '1. Regular button',
    'fn.1.btn': 'Open',
    'fn.1.info': 'A basic button runs an action on click. Use it to submit, confirm, or open a window. JavaScript listens for the click and, in this example, opens this modal.',
    'fn.2.title': '2. Textured button',
    'fn.2.btn': 'Open',
    'fn.2.info': 'This button changes its look on hover and while it is held down, so each state is easy to see. Use it when a control should feel tactile. CSS :hover and :active swap the colors; the click still opens this modal.',
    'fn.3.title': '3. On / Off',
    'fn.3.off': 'Off',
    'fn.3.on': 'On',
    'fn.3.info': 'A switch stores an on or off state. Use it for settings — for example, to show or hide a panel. The first click turns it on and opens this note; the second click turns it off and hides the note.',
    'fn.4.title': '4. Expandable text',
    'fn.4.lead': 'Click this field to read more.',
    'fn.4.info': 'Expandable text keeps extra lines hidden until the field is clicked. Use it for FAQs and long notes so the page stays short. A click toggles a class that shows or hides the rest of the text.',
    'fn.5.title': '5. Selector',
    'fn.5.btn': 'Choose',
    'fn.5.opt1': 'First',
    'fn.5.opt2': 'Second',
    'fn.5.opt3': 'Third',
    'fn.5.info': 'A selector opens a list of choices. Use it when the user must pick one value from a few options. After a click on an option the list closes.',
    'fn.6.title': '6. Scrollbar',
    'fn.6.btn': 'Show',
    'fn.6.info': 'The scrollbar can change color, width, and corner shape. Use it to match the page. Here the thumb uses the hover color, is twice as wide as usual, and has sharp corners. The track has no fill.',
    'fn.6.more1': 'More lines so the bar appears and you can drag it.',
    'fn.6.more2': 'The thumb is the same violet used on hover. Edges stay square.',
    'fn.6.more3': 'The track behind the thumb is empty — only the thumb is painted.',
    'fn.6.more4': 'Width is about twice a usual browser bar, so the change is easy to see.',
    'fn.7.title': '7. Search',
    'fn.7.placeholder': 'Search',
    'fn.7.item1': 'A search field filters the notes below as you type.',
    'fn.7.item2': 'Put search on lists, FAQ blocks, and documentation pages.',
    'fn.7.item3': 'The script compares the query with each note and hides notes that do not match.',
    'fn.7.item4': 'This demo searches only the notes under this field, not the rest of the page.',
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
    'sampler.p1': 'На этой странице я показываю, что умею делать в браузере: вёрстку, интерактив и детали интерфейса.',
    'sampler.p2': 'Новые темы будут появляться в меню по мере добавления примеров. Навигация — первая из них.',
    'sampler.nav': 'Навигация',
    'footer.credit': 'Сайт создан Norimaru',
    'fn.toc.info': 'На этой странице показаны обычные элементы интерфейса. Выберите название, чтобы перейти к нему.',
    'fn.1.title': '1. Обычная кнопка',
    'fn.1.btn': 'Открыть',
    'fn.1.info': 'Обычная кнопка запускает действие по нажатию. Её ставят на отправку, подтверждение или открытие окна. JavaScript ловит клик и в этом примере открывает это окно.',
    'fn.2.title': '2. Кнопка с текстурами',
    'fn.2.btn': 'Открыть',
    'fn.2.info': 'Эта кнопка меняет вид при наведении и пока её держат нажатой, чтобы каждое состояние было видно. Так делают, когда элемент должен ощущаться нажимаемым. Цвета меняют CSS :hover и :active; клик по-прежнему открывает это окно.',
    'fn.3.title': '3. Вкл / выкл',
    'fn.3.off': 'Выкл',
    'fn.3.on': 'Вкл',
    'fn.3.info': 'Переключатель хранит состояние «вкл» или «выкл». Его ставят в настройки — например, чтобы показать или спрятать панель. Первое нажатие включает кнопку и открывает эту заметку; второе выключает и прячет её.',
    'fn.4.title': '4. Развёртываемый текст',
    'fn.4.lead': 'Нажмите это поле, чтобы прочитать дальше.',
    'fn.4.info': 'Развёртываемый текст прячет лишние строки, пока по полю не нажмут. Его ставят в FAQ и длинные заметки, чтобы страница оставалась короткой. Клик переключает класс, который показывает или скрывает остальной текст.',
    'fn.5.title': '5. Селектор',
    'fn.5.btn': 'Выбрать',
    'fn.5.opt1': 'Первый',
    'fn.5.opt2': 'Второй',
    'fn.5.opt3': 'Третий',
    'fn.5.info': 'Селектор открывает список вариантов. Его ставят, когда нужно выбрать одно значение из нескольких. После клика по пункту список закрывается.',
    'fn.6.title': '6. Скроллбар',
    'fn.6.btn': 'Показать',
    'fn.6.info': 'У полосы прокрутки можно менять цвет, ширину и форму краёв. Так её подгоняют под стиль страницы. Здесь бегунок цвета наведения, вдвое шире обычного, с острыми углами. У дорожки нет заливки.',
    'fn.6.more1': 'Ещё строки, чтобы полоса появилась и её можно было подвигать.',
    'fn.6.more2': 'Бегунок того же фиолета, что и цвет при наведении. Края прямые.',
    'fn.6.more3': 'Дорожка за бегунком пустая — залит только сам бегунок.',
    'fn.6.more4': 'Ширина примерно вдвое больше обычной полосы браузера, чтобы разницу было видно.',
    'fn.7.title': '7. Поиск',
    'fn.7.placeholder': 'Поиск',
    'fn.7.item1': 'Строка поиска фильтрует заметки ниже по мере ввода.',
    'fn.7.item2': 'Поиск ставят на списки, блоки FAQ и страницы с документацией.',
    'fn.7.item3': 'Скрипт сравнивает запрос с каждой заметкой и прячет те, что не совпали.',
    'fn.7.item4': 'Этот пример ищет только в заметках под полем, а не по всей странице.',
  },
};

const STORAGE_KEY = 'lang';

const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav__btn:not(.page-menu__btn)');
const lang = document.querySelector('.lang');
const langBtn = document.querySelector('.lang__btn');
const contact = document.querySelector('.contact');
const contactBtn = document.querySelector('.contact__btn');
const pageMenu = document.querySelector('.page-menu');
const pageMenuBtn = document.querySelector('.page-menu__btn');
const modal = document.querySelector('.modal:not(.modal--scroll)');
const modalText = modal ? modal.querySelector('.modal__text') : null;
const scrollModal = document.querySelector('.modal--scroll');
const toggleBtn = document.querySelector('.demo-btn--toggle');
const foldBtn = document.querySelector('.demo-fold');
const selectWrap = document.querySelector('.demo-select');
const selectBtn = document.querySelector('.demo-select__btn');
const searchInput = document.querySelector('.demo-search');

function pack() {
  return dict[getLang()] || dict.en;
}

function getLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'uk') return 'ru';
  if (saved === 'en' || saved === 'ru') return saved;
  const code = (navigator.language || 'en').toLowerCase();
  return code.startsWith('ru') ? 'ru' : 'en';
}

function applyLang(code) {
  const texts = dict[code] || dict.en;
  document.documentElement.lang = code;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const text = texts[el.dataset.i18n];
    if (text) el.textContent = text;
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const text = texts[el.dataset.i18nAria];
    if (text) el.setAttribute('aria-label', text);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const text = texts[el.dataset.i18nPlaceholder];
    if (text) el.setAttribute('placeholder', text);
  });

  document.querySelectorAll('.lang__opt').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === code);
  });

  localStorage.setItem(STORAGE_KEY, code);
  syncDemoLang();
}

function syncDemoLang() {
  const texts = pack();

  if (toggleBtn) {
    toggleBtn.textContent = texts[toggleBtn.classList.contains('is-on') ? 'fn.3.on' : 'fn.3.off'];
  }

  if (selectBtn && selectBtn.dataset.selected) {
    selectBtn.textContent = texts[selectBtn.dataset.selected];
  }

  if (modalText && modal && !modal.hidden && modalText.dataset.key) {
    modalText.textContent = texts[modalText.dataset.key];
  }

  filterSearch();
}

function openNav() {
  nav.classList.add('is-open');
  navBtn.setAttribute('aria-expanded', 'true');
}

function closeNav() {
  if (!nav || !navBtn) return;
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

function togglePageMenu() {
  const open = !pageMenu.classList.contains('is-open');
  pageMenu.classList.toggle('is-open', open);
  pageMenuBtn.setAttribute('aria-expanded', String(open));
}

function closePageMenu() {
  if (!pageMenu) return;
  pageMenu.classList.remove('is-open');
  if (pageMenuBtn) pageMenuBtn.setAttribute('aria-expanded', 'false');
}

function openModal(key) {
  if (!modal || !modalText) return;
  modalText.dataset.key = key;
  modalText.textContent = pack()[key] || '';
  modal.hidden = false;
}

function closeModal() {
  if (modal) modal.hidden = true;
  if (scrollModal) scrollModal.hidden = true;
}

function closeSelect() {
  if (!selectWrap) return;
  selectWrap.classList.remove('is-open');
  if (selectBtn) selectBtn.setAttribute('aria-expanded', 'false');
}

function filterSearch() {
  if (!searchInput) return;
  const q = searchInput.value.trim().toLowerCase();
  document.querySelectorAll('.demo-search-list p').forEach((el) => {
    el.hidden = q !== '' && !el.textContent.toLowerCase().includes(q);
  });
}

if (navBtn) {
  navBtn.addEventListener('click', () => {
    toggleNav();
  });
}

langBtn.addEventListener('click', () => {
  toggleLang();
});

contactBtn.addEventListener('click', () => {
  toggleContact();
});

if (pageMenuBtn) {
  pageMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePageMenu();
  });
}

document.querySelectorAll('.lang__opt').forEach((btn) => {
  btn.addEventListener('click', () => {
    applyLang(btn.dataset.lang);
    closeLang();
  });
});

document.querySelectorAll('[data-modal]').forEach((btn) => {
  btn.addEventListener('click', () => {
    openModal(btn.dataset.modal);
  });
});

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const on = !toggleBtn.classList.contains('is-on');
    toggleBtn.classList.toggle('is-on', on);
    toggleBtn.setAttribute('aria-pressed', String(on));
    toggleBtn.textContent = pack()[on ? 'fn.3.on' : 'fn.3.off'];
    const note = toggleBtn.parentElement.querySelector('.fn__note');
    if (note) note.hidden = !on;
  });
}

if (foldBtn) {
  foldBtn.addEventListener('click', () => {
    const open = !foldBtn.classList.contains('is-open');
    foldBtn.classList.toggle('is-open', open);
    foldBtn.setAttribute('aria-expanded', String(open));
  });
}

if (selectBtn) {
  selectBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = !selectWrap.classList.contains('is-open');
    selectWrap.classList.toggle('is-open', open);
    selectBtn.setAttribute('aria-expanded', String(open));
  });
}

if (selectWrap) {
  selectWrap.querySelectorAll('[data-opt]').forEach((opt) => {
    opt.addEventListener('click', () => {
      selectBtn.dataset.selected = opt.dataset.opt;
      selectBtn.textContent = pack()[opt.dataset.opt];
      closeSelect();
      const note = selectWrap.parentElement.querySelector('.fn__note');
      if (note) note.hidden = false;
    });
  });
}

const scrollOpen = document.querySelector('[data-scroll-modal]');
if (scrollOpen && scrollModal) {
  scrollOpen.addEventListener('click', () => {
    scrollModal.hidden = false;
  });
}

if (searchInput) {
  searchInput.addEventListener('input', filterSearch);
}

if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

if (scrollModal) {
  scrollModal.addEventListener('click', (e) => {
    if (e.target === scrollModal) closeModal();
  });
}

document.addEventListener('click', (e) => {
  if (navBtn && nav && !e.target.closest('.nav')) closeNav();
  if (!e.target.closest('.lang')) closeLang();
  if (!e.target.closest('.contact')) closeContact();
  if (pageMenu && !e.target.closest('.page-menu')) closePageMenu();
  if (selectWrap && !e.target.closest('.demo-select')) closeSelect();
});

applyLang(getLang());
