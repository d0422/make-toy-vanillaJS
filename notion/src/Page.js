class Page {
  constructor() {
    const mainUI = document.getElementById('main');
    const newPage = document.createElement('div');
    const newTitle = document.createElement('input');
    newTitle.placeholder = '제목 없음';
    newPage.style.padding = '100px';
    newPage.appendChild(newTitle);
    newTitle.classList.add('title');
    if (mainUI.hasChildNodes()) {
      mainUI.removeChild(mainUI.firstChild);
    }
    mainUI.appendChild(newPage);
  }
}
export default Page;
