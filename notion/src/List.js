import Dom from './Dom';

class List {
  constructor() {
    const newPageList = new Dom('div', 'newPageList');
    const newIcon = new Dom('div', 'clickableDark', '📄');
    const newToggle = new Dom('div', 'clickableDark', '>');
    const newText = new Dom('div', 'newText', '제목없음');

    newPageList.append(newToggle);
    newPageList.append(newIcon);
    newPageList.append(newText);

    newIcon.element.classList.add('newText');

    const nav = document.querySelector('nav');
    nav.appendChild(newPageList.element);
    this.element = newPageList.element;
  }
}
export default List;
