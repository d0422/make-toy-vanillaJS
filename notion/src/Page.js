import Block from './Block';

class Page {
  constructor() {
    const mainUI = document.getElementById('main');
    const newPage = document.createElement('div');
    const newTitle = document.createElement('input');
    const introduce = document.createElement('div');
    const iconTemplate = document.createElement('div');
    const noIconTemplate = document.createElement('div');

    introduce.innerHTML =
      'Enter 키를 눌러 빈 페이지로 시작하거나, ↕키로 원하는 템플릿을 선택하세요.';
    newTitle.placeholder = '제목 없음';
    iconTemplate.innerHTML = '📑 아이콘이 있는 빈 페이지';
    noIconTemplate.innerHTML = '📄 빈 페이지';
    iconTemplate.classList.add('template');
    noIconTemplate.classList.add('template');
    introduce.classList.add('introduce');
    newPage.classList.add('newPage');
    newTitle.classList.add('title');

    newPage.appendChild(newTitle);
    newPage.appendChild(introduce);
    newPage.appendChild(iconTemplate);
    newPage.appendChild(noIconTemplate);

    if (mainUI.hasChildNodes()) {
      mainUI.removeChild(mainUI.firstChild);
    }
    mainUI.appendChild(newPage);

    newTitle.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        newPage.removeChild(introduce);
        newPage.removeChild(iconTemplate);
        newPage.removeChild(noIconTemplate);
        setTimeout(() => newTitle.onblur(), 100);
        new Block(newPage);
      }
    });
  }
}
export default Page;
