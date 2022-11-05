const body = document.querySelector('body');

const changeThemePage = (theme) => {
  const classStroke = `page--${theme}`;
  body.removeAttribute('class');
  body.classList.add(classStroke);
  console.log(classStroke);
}

export { changeThemePage }
