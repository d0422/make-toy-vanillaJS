import List from './List';
import Page from './Page';
const plusButton = document.querySelector('.pluspage');
const list = [];
const pages = [];
plusButton.addEventListener('click', () => {
  const newPage = new Page();
  const newList = new List();
  pages.push(newPage);
  list.push(newList);
  newList.HTML.style.backgroundColor = '#ededeb';
});
