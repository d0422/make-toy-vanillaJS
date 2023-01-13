import Observer from './Observer';

export default class TitleModel extends Observer {
  constructor() {
    super();
    this.text = '제목 없음';
  }
  getTitle() {
    return this.text;
  }
  setTitle(text) {
    this.text = text;
    this.notify();
  }
}
