export default class Observer {
  constructor() {
    this._observers = new Set();
  }
  subscribe(observer) {
    this._observers.add(observer);
    //메서드 등록
  }
  notify() {
    this._observers.forEach((observer) => observer());
  }
}
