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
  get firstChild() {
    return this.element.firstChild;
  }
  get lastChild() {
    return this.element.lastChild;
  }

  get value() {
    return this.element.value;
  }
  set value(inputValue) {
    this.element.value = inputValue;
  }

  get placeholder() {
    return this.element.placeholder;
  }
  set placeholder(inputValue) {
    this.element.placeholder = inputValue;
  }

  get innerHTML() {
    return this.element.innerHTML;
  }
  set innerHTML(inputValue) {
    this.element.innerHTML = inputValue;
  }
  get childElementCount() {
    return this.element.childElementCount;
  }
  get previousSibling() {
    return this.element.previousSibling;
  }
  get nextSibling() {
    return this.element.nextSibling;
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
  addClass(className) {
    this.element.classList.add(className);
  }
}

export default Dom;
