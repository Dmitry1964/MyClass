import { coursesList } from './courses';

const viewList = document.querySelector('.main-page__view-list');
const viewButtons = viewList.querySelectorAll('.main-page__view-btn');

const buttonViewHendler = (evt) => {
  const button = evt.target.closest('button');
  if (!button) {
    return;
  }
  viewButtons.forEach((element) => {
    element.classList.remove('main-page__view-btn--active');
  });
  button.classList.add('main-page__view-btn--active');
  const view = button.getAttribute('data-view');
  changeViewCourses(view);
};

const changeViewCourses = (view) => {
  coursesList.removeAttribute('class');
  const viewClass = `courses__list--${view}`;
  coursesList.classList.add(viewClass);
};

viewList.addEventListener('click', buttonViewHendler);
