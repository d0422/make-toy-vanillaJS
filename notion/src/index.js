import Dom from './Dom';
import List from './List';
import Page from './Page';
const plusButton = document.querySelector('.pluspage');
const resizeButton = new Dom('div', 'resizeBar');
const nav = document.querySelector('nav');

let pressed = false;
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
const list = [];
const pages = [];
plusButton.addEventListener('click', () => {
  const newPage = new Page();
  const newList = new List();
  pages.push(newPage);
  list.push(newList);
  newList.HTML.style.backgroundColor = '#ededeb';
});
