import Dom from './Dom';

class List {
  constructor(titleModel) {
    this.titleModel = titleModel;
    const newPageList = new Dom('div', 'newPageList');
    const newIcon = new Dom('div', 'clickableDark', '📄');
    const newToggle = new Dom('div', 'clickableDark', '>');
    this.newText = new Dom('div', 'newText', this.titleModel.getTitle());
    this.titleModel.subscribe(this.titleRender.bind(this));
    newPageList.append(newToggle);
    newPageList.append(newIcon);
    newPageList.append(this.newText);

    newIcon.addClass('newText');

    const nav = document.querySelector('nav');
    nav.appendChild(newPageList.element);
    this.element = newPageList.element;
  }
  titleRender() {
    const text = this.titleModel.getTitle();
    this.newText.innerHTML = text;
  }
}
export default List;
