import { EMPTY_MESSAGE } from './const';
import Dom from './Dom';
class Block {
  constructor(main) {
    const newBlock = new Dom('input', 'block', EMPTY_MESSAGE);
    newBlock.focus();
    main.append(newBlock);
    const keyDownEvent = {
      Enter() {
        newBlock.placeholder = '';
        newBlock.onblur();
        new Block(main);
      },
      Backspace() {
        if (newBlock.value !== '') return;
        main.remove(newBlock);
        if (main.childElementCount != 2)
          main.lastChild.placeholder = EMPTY_MESSAGE;
        setTimeout(() => main.lastChild.focus(), 0);
      },
      ArrowUp() {
        newBlock.placeholder = '';
        setTimeout(() => {
          newBlock.previousSibling.focus();
          newBlock.previousSibling.placeholder = EMPTY_MESSAGE;
        }, 0);
      },
      ArrowDown() {
        if (newBlock.nextSibling) {
          newBlock.placeholder = '';
          setTimeout(() => {
            newBlock.nextSibling.focus();
            newBlock.nextSibling.placeholder = EMPTY_MESSAGE;
          }, 0);
        }
      },
    };

    newBlock.addEventListener('keydown', (event) => {
      keyDownEvent[event.key]();
      if (event.key === '/') {
        console.log('/눌러짐');
      }
    });

    newBlock.addEventListener('keyup', (event) => {
      if (event.key === ' ' && newBlock.value === '# ') {
        newBlock.addClass('h1');
        newBlock.value = '';
        newBlock.placeholder = '제목1';
      }
      if (event.key === ' ' && newBlock.value === '## ') {
        newBlock.addClass('h2');
        newBlock.value = '';
        newBlock.placeholder = '제목2';
      }
      if (event.key === ' ' && newBlock.value === '### ') {
        newBlock.addClass('h3');
        newBlock.value = '';
        newBlock.placeholder = '제목3';
      }
    });
  }
}
export default Block;
