class Block {
  constructor(main) {
    const newBlock = document.createElement('input');
    setTimeout(() => newBlock.focus(), 100);
    newBlock.placeholder = '명령어 사용 시 "/"를 입력하세요';
    newBlock.classList.add('block');
    main.appendChild(newBlock);

    newBlock.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        setTimeout(() => newBlock.onblur(), 100);
        new Block(main);
      }
    });
  }
}
export default Block;
