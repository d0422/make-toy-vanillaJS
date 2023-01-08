class Block {
  constructor(main) {
    const newBlock = document.createElement('input');
    setTimeout(() => newBlock.focus(), 100);
    newBlock.placeholder = '명령어 사용 시 "/"를 입력하세요';
    newBlock.classList.add('block');
    main.appendChild(newBlock);

    newBlock.addEventListener('keydown', (event) => {
      console.log(event.key);
      if (event.key === 'Enter') {
        newBlock.placeholder = '';
        setTimeout(() => newBlock.onblur(), 0);
        new Block(main);
      }
      if (event.key === 'Backspace' && newBlock.value === '') {
        main.removeChild(main.lastChild);
        if (main.childElementCount != 1) {
          main.lastChild.placeholder = '명령어 사용 시 " / "를 입력하세요';
        }
        setTimeout(() => main.lastChild.focus(), 0);
      }
    });
  }
}
export default Block;
