import Dom from './Dom';

class Block {
  constructor(main) {
    const newBlock = new Dom(
      'input',
      'block',
      '명령어 사용 시 "/"를 입력하세요'
    );
    newBlock.focus();
    main.append(newBlock);

    newBlock.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        newBlock.element.placeholder = '';
        newBlock.onblur();
        new Block(main);
      }
      if (event.key === 'Backspace' && newBlock.value === '') {
        main.element.removeChild(main.lastChild);
        if (main.childElementCount != 2) {
          main.lastChild.placeholder = '명령어 사용 시 " / "를 입력하세요';
        }
        setTimeout(() => main.lastChild.focus(), 0);
      }
    });
  }
}
export default Block;
