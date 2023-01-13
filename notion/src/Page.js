import Block from './Block';
import Dom from './Dom';

class Page {
  constructor(titleModel) {
    this.titleModel = titleModel;
    this.titleModel.subscribe(this.titleRender.bind(this));
    if (!this.mainUI) this.pageInit();
    this.load();

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
    this.newTitle.addEventListener('keyup', () => {
      this.titleModel.setTitle(this.newTitle.value);
    });
  }
  load() {
    document.body.appendChild(this.mainUI.element);
  }
  pageInit() {
    this.mainUI = new Dom('div', 'main');
    this.iconBar = new Dom('div', 'iconBar', '☺ 아이콘 추가');
    this.newPage = new Dom('div', 'newPage');
    this.newTitle = new Dom('input', 'title', this.titleModel.getTitle());
    this.introduce = new Dom(
      'div',
      'introduce',
      'Enter 키를 눌러 빈 페이지로 시작하거나, ↕키로 원하는 템플릿을 선택하세요.'
    );
    this.newPage.append(this.iconBar);
    this.newPage.append(this.newTitle);
    this.newPage.append(this.introduce);
    this.iconBar.addEventListener('click', () => this.iconAdd());
    this.mainUI.append(this.newPage);
    this.makeTemplate();
  }
  makeTemplate() {
    this.noIconTemplate = new Dom('div', 'template', '📄 빈 페이지');
    this.iconTemplate = new Dom(
      'div',
      'template',
      '📑 아이콘이 있는 빈 페이지'
    );

    this.newPage.append(this.iconTemplate);
    this.newPage.append(this.noIconTemplate);
    this.noIconTemplate.addEventListener('click', () => {
      this.destroyTemplate();
      new Block(this.newPage);
    });
    this.iconTemplate.addEventListener('click', () => {
      this.iconAdd();
      this.destroyTemplate();
      new Block(this.newPage);
    });
  }
  destroyTemplate() {
    this.newPage.remove(this.iconTemplate);
    this.newPage.remove(this.noIconTemplate);
    this.newPage.remove(this.introduce);
  }
  iconAdd() {
    this.iconBar.innerHTML = '😚';
    this.iconBar.element.style.fontSize = '70px';
    this.iconBar.element.style.width = '80px';
    this.iconBar.element.style.height = '80px';
  }
  titleRender() {
    const text = this.titleModel.getTitle();
    this.newTitle.value = text;
  }
}
export default Page;
