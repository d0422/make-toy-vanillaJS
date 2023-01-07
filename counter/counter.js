const div = document.querySelector('div');
const text = document.querySelector('textarea');
text.addEventListener('keyup', () => {
  div.innerHTML = `공백포함: ${text.value.length}\n 공백제외:${
    text.value.replace(/ /g, '').length
  }`;
});

// 사용자가 키보드를 누른다.
// keydown 이벤트가 발생한다.
// 글자가 입력된다.
// keypress 이벤트가 발생한다.
// 사용자가 키보드에서 손을 뗀다.
// keyup 이벤트가 발생한다.
