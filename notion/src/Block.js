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
        newBlock.placeholder = '';
        newBlock.onblur();
        new Block(main);
      }
      if (event.key === 'Backspace' && newBlock.value === '') {
        main.remove(newBlock);
        if (main.childElementCount != 2) {
          main.lastChild.placeholder = '명령어 사용 시 " / "를 입력하세요';
        }
        setTimeout(() => main.lastChild.focus(), 0);
      }
      if (event.key === '/') {
        console.log('/눌러짐');
      }
      if (event.key === 'ArrowUp') {
        newBlock.placeholder = '';
        setTimeout(() => {
          newBlock.previousSibling.focus();
          newBlock.previousSibling.placeholder =
            '명령어 사용 시 ' / '를 입력하세요';
        }, 0);
      }
      if (event.key === 'ArrowDown') {
        if (newBlock.nextSibling) {
          newBlock.placeholder = '';
          setTimeout(() => {
            newBlock.nextSibling.focus();
            newBlock.nextSibling.placeholder =
              '명령어 사용 시 " / "를 입력하세요';
          }, 0);
        }
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
