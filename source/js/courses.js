const courses = [
  {
    img: 'img/picture-1.png',
    width: '142',
    height: '132',
    title: 'Полный курс по JavaScript',
    description: 'Освой самый популярный язык программирования – JavaScript, и научись применять знания на практике',
    rating: '4.9',
    hours: '72 часа',
  },
  {
    img: 'img/picture-2.png',
    width: '196',
    height: '119',
    title: 'Создание адаптивных сайтов',
    description: 'Адаптивная верстка с нуля для начинающих на примере одностраничного сайта',
    rating: '4.9',
    hours: '12 часов',
  },
  {
    img: 'img/picture-3.png',
    width: '159',
    height: '132',
    title: 'Node JS. Практический курс',
    description: 'Полный гайд по созданию сайтов и приложений на серверном JavaScript, включая базы данных и создание API',
    rating: '4.8',
    hours: '15 часов',
  },
  {
    img: 'img/picture-4.png',
    width: '72',
    height: '141',
    title: 'Полное руководство по  Pyton 3',
    description: 'Доступно и просто для новичков. Начните с основ и пройдите весь путь до создания собственных приложений',
    rating: '4.8',
    hours: '45 часов',
  },
  {
    img: 'img/picture-5.png',
    width: '142',
    height: '124',
    title: 'Django 3. Сервис по сбору данных',
    description: 'Полноценный сервис, построенный на Django 3. Сбор данных о вакансиях с открытых источников по заданным параметрам',
    rating: '4.7',
    hours: '25 часов',
  },
  {
    img: 'img/picture-6.png',
    width: '180',
    height: '131',
    title: 'Bootstrap для новичков',
    description: 'Научитесь верстать сайты быстро и эффективно, благодаря применению готовых компонентов фреймворка',
    rating: '4.6',
    hours: '5 часов',
  },



];

const STAR = '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.05863 1.31256C7.2184 0.895814 7.7816 0.895815 7.94137 1.31256L9.35687 5.00488C9.4249 5.18235 9.58391 5.30336 9.76606 5.31629L13.5558 5.58547C13.9836 5.61585 14.1576 6.17693 13.8286 6.46487L10.9137 9.01603C10.7736 9.13865 10.7128 9.33445 10.7574 9.51991L11.6841 13.3786C11.7887 13.8141 11.333 14.1609 10.9699 13.9221L7.75289 11.8065C7.59827 11.7048 7.40173 11.7048 7.24711 11.8065L4.03006 13.9221C3.66696 14.1609 3.21132 13.8141 3.31592 13.3786L4.24263 9.51991C4.28717 9.33445 4.22644 9.13865 4.08634 9.01603L1.17138 6.46487C0.842371 6.17693 1.01641 5.61585 1.44416 5.58547L5.23394 5.31629C5.41609 5.30336 5.5751 5.18235 5.64313 5.00488L7.05863 1.31256Z" stroke="currentColor" stroke-linecap="square"/></svg>'
const HOURS = '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.8793 4.43847C2.74676 4.67203 2.62942 4.91634 2.52864 5.16999L2.45672 5.35101C1.84776 6.88371 1.84776 8.60584 2.45672 10.1385C3.06569 11.6713 4.23373 12.889 5.7039 13.5238C7.17407 14.1587 8.82593 14.1587 10.2961 13.5238C11.7663 12.889 12.9343 11.6713 13.5433 10.1385C14.1522 8.60584 14.1522 6.88371 13.5433 5.35101C12.9343 3.8183 11.7663 2.60057 10.2961 1.9657C10.0385 1.85447 9.77538 1.76273 9.50861 1.69048M7.50367 1.32179C7.55442 1.19406 7.65176 1.09258 7.77427 1.03968C7.89679 0.986774 8.03444 0.986774 8.15696 1.03968C8.27947 1.09258 8.37681 1.19406 8.42755 1.32179C8.4783 1.44951 8.4783 1.59302 8.42755 1.72075C8.37681 1.84848 8.27947 1.94995 8.15696 2.00286C8.03444 2.05576 7.89679 2.05576 7.77427 2.00286C7.65176 1.94995 7.55442 1.84848 7.50367 1.72075C7.45293 1.59302 7.45293 1.44951 7.50367 1.32179ZM3.40762 2.97006L8.19738 7.19534C8.31479 7.29891 8.38251 7.45112 8.38251 7.61146C8.38251 7.91251 8.14841 8.15657 7.85964 8.15657C7.70584 8.15657 7.55984 8.08597 7.46049 7.96357L3.40762 2.97006Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>'

const coursesList = document.querySelector('.courses__list');

coursesList.innerHTML = '';

const coursesStroke = courses.map(({ img, width, height, title, description, rating, hours }) => `
<article class="courses__item">
  <div class="courses__image">
    <img src="${img}" width="${width}" height="${height}" alt="Иллюстрация">
  </div>
  <div class="courses__wrapper">
    <h3 class="courses__title">${title}</h3>
    <p class="courses__description">${description}</p>
    <div class="courses__info">
      <div class="courses__rating">
        ${STAR}
        <span>${rating}</span>
      </div>
      <div class="courses__hours">
        ${HOURS}
        <span>${hours}</span>
      </div>
    </div>
  </div>
</article>
`).join('');

coursesList.insertAdjacentHTML('beforeend', coursesStroke);
