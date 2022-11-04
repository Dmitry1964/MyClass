const navigationList = document.querySelector('.navigation__list');
const navigationLinks = document.querySelectorAll('.navigation__link');

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

navigationList.addEventListener('click', navigationLinkHendler);
