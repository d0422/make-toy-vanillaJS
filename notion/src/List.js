class List {
  constructor() {
    const newPageList = document.createElement('div');
    const newIcon = document.createElement('div');
    const newToggle = document.createElement('div');
    const newText = document.createElement('div');

    newToggle.innerHTML = '>';
    newIcon.innerHTML = '📄';
    newText.innerHTML = '제목없음';

    newPageList.appendChild(newToggle);
    newPageList.appendChild(newIcon);
    newPageList.appendChild(newText);

    newIcon.style.paddingLeft = '3px';
    newText.style.paddingLeft = '3px';
    newToggle.classList.add('clickableDark');
    newIcon.classList.add('clickableDark');

    newPageList.classList.add('newPageList');
    const nav = document.querySelector('nav');
    nav.appendChild(newPageList);
    this.HTML = newPageList;
  }
}
export default List;
