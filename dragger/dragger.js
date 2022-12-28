const ball = document.getElementById('ball');
let pressed = false;
function stateChanger(width, height, backgroundColor) {
  ball.style.backgroundColor = backgroundColor;
  ball.style.width = `${width}px`;
  ball.style.height = `${height}px`;
}
function onMouseMove() {
  if (pressed) {
    ball.style.top = window.event.pageY - 50 + 'px';
    ball.style.left = window.event.pageX - 50 + 'px';
  }
}
function onMouseUp() {
  pressed = false;
  ball.classList.remove('animation-move');
  ball.classList.add('animation-end');
  stateChanger(200, 200, 'black');
  ball.style.cursor = 'pointer';
  ball.innerHTML = 'Grab Me';
}
function onMouseDown() {
  pressed = true;
  ball.classList.remove('animation-end');
  ball.classList.add('animation-move');
  stateChanger(100, 100, 'coral');
  ball.style.cursor = 'grab';
  ball.innerHTML = 'Grab!!';
}
ball.addEventListener('mousedown', onMouseDown);
ball.addEventListener('mouseup', onMouseUp);
ball.addEventListener('mousemove', onMouseMove);
