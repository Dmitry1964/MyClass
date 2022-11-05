
const navigationList = document.querySelector('.navigation__list');
const navigationLinks = navigationList.querySelectorAll('.navigation__link');
const themeButtonsList = document.querySelector('.navigation__buttons');
const themeButtonItems = themeButtonsList.querySelectorAll('.navigation__btn-item');


const navigationLinkHendler = (evt) => {
  const element = evt.target.closest('a');
  if (!element) {
    return;
  };
  navigationLinks.forEach((link) => {
    link.classList.remove('navigation__link--active');
  });
  element.classList.add('navigation__link--active');
};

const themeButtonHendler = (evt) => {
  const element = evt.target.closest('li');
  if (!element) {
    return;
  }
  themeButtonItems.forEach((item) => {
    item.classList.remove('navigation__btn-item--active');
  });
  element.classList.add('navigation__btn-item--active');

  const themeButton = element.querySelector('.navigation__btn');
  const theme = themeButton.getAttribute('data-theme');
};

navigationList.addEventListener('click', navigationLinkHendler);
themeButtonsList.addEventListener('click', themeButtonHendler);
