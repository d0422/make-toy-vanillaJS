import Block from './Block';
import Dom from './Dom';

class Page {
  constructor() {
    this.iconBar = new Dom('div', 'iconBar', '☺ 아이콘 추가');
    this.mainUI = new Dom('div', 'main');
    document.body.appendChild(this.mainUI.element);
    this.newPage = new Dom('div', 'newPage');
    this.newTitle = new Dom('input', 'title', '제목없음');
    this.newPage.append(this.iconBar);
    this.newPage.append(this.newTitle);
    this.pageInit();

    if (this.mainUI.hasChildNodes()) {
      this.mainUI.removeChild(this.mainUI.firstChild);
    }
    this.mainUI.append(this.newPage);

    this.newTitle.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        console.log(this.newPage.childElementCount);
        if (this.newPage.childElementCount != 2) {
          this.destroyTemplate();
        }
        this.newTitle.onblur();
        new Block(this.newPage);
      }
    });
    this.noIconTemplate.addEventListener('click', () => {
      this.destroyTemplate();
    });
    this.iconBar.addEventListener('click', () => {
      this.iconBar.element.innerHTML = '😚';
      this.iconBar.element.style.fontSize = '70px';
      this.iconBar.element.style.width = '80px';
      this.iconBar.element.style.height = '80px';
    });
  }
  pageInit() {
    this.introduce = new Dom(
      'div',
      'introduce',
      'Enter 키를 눌러 빈 페이지로 시작하거나, ↕키로 원하는 템플릿을 선택하세요.'
    );
    this.noIconTemplate = new Dom('div', 'template', '📄 빈 페이지');
    this.iconTemplate = new Dom(
      'div',
      'template',
      '📑 아이콘이 있는 빈 페이지'
    );
    this.newPage.append(this.iconTemplate);
    this.newPage.append(this.noIconTemplate);
    this.newPage.append(this.introduce);
  }
  destroyTemplate() {
    this.newPage.remove(this.introduce);
    this.newPage.remove(this.iconTemplate);
    this.newPage.remove(this.noIconTemplate);
  }
}
export default Page;
