class Dom {
  constructor(elementType, className, innerHTML) {
    this.element = document.createElement(elementType);
    if (innerHTML !== undefined) {
      if (elementType === 'input') {
        this.element.placeholder = innerHTML;
      } else {
        this.element.innerHTML = innerHTML;
      }
    }
    if (className !== undefined) this.element.classList.add(className);
  }
  append(domInstance) {
    this.element.appendChild(domInstance.element);
  }
  remove(domInstance) {
    this.element.removeChild(domInstance.element);
  }
  addEventListener(event, func) {
    this.element.addEventListener(event, func);
  }
  focus() {
    setTimeout(() => this.element.focus(), 0);
  }
  onblur() {
    setTimeout(() => this.element.blur(), 0);
  }
  hasChildNodes() {
    return this.element.hasChildNodes();
  }
  get firstChild() {
    return this.element.firstChild;
  }
  get lastChild() {
    return this.element.lastChild;
  }
  get value() {
    return this.element.value;
  }
  get childElementCount() {
    return this.element.childElementCount;
  }
}

export default Dom;
