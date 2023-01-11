import Dom from './Dom';
import List from './List';
import Page from './Page';
function resize() {
  const nav = document.querySelector('nav');
  let pressed = false;
  const resizeButton = new Dom('div', 'resizeBar');
  document.body.appendChild(resizeButton.element);
  resizeButton.addEventListener('mousedown', () => {
    console.log('눌림!');
    pressed = true;
    if (window.event.pageX >= 150) {
      nav.style.width = window.event.pageX - 5 + 'px';
      resizeButton.element.style.paddingLeft = window.event.pageX + 'px';
      if (document.querySelector('.main')) {
        const main = document.querySelector('.main');
        main.style.paddingLeft = resizeButton.element.style.paddingLeft + 'px';
      }
    }
  });
  resizeButton.addEventListener('mouseup', () => {
    pressed = false;
  });
  resizeButton.addEventListener('mousemove', () => {
    if (pressed) {
      if (window.event.pageX >= 150) {
        nav.style.width = window.event.pageX - 5 + 'px';
        resizeButton.element.style.paddingLeft = window.event.pageX + 'px';
        if (document.querySelector('.main')) {
          const main = document.querySelector('.main');
          main.style.paddingLeft = window.event.pageX + 'px';
        }
      }
    }
  });
}
resize();
const plusButton = document.querySelector('.pluspage');
const list = [];
const pages = [];
plusButton.addEventListener('click', () => {
  while (document.body.childElementCount > 2) {
    document.body.removeChild(document.body.lastChild);
  }

  const newPage = new Page();
  const newList = new List();
  list.forEach((l) => {
    l.element.style.backgroundColor = '#f7f7f5';
  });
  newList.element.style.backgroundColor = '#ededeb';
  pages.push(newPage);
  list.push(newList);
  newList.element.addEventListener('click', () => {
    while (document.body.childElementCount > 2) {
      document.body.removeChild(document.body.lastChild);
    }
    list.forEach((l) => {
      l.element.style.backgroundColor = '#f7f7f5';
    });
    newList.element.style.backgroundColor = '#ededeb';
    console.log(newPage.pageContext);
    newPage.load();
  });
});
