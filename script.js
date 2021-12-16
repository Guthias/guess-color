const answer = document.getElementById('answer');
let filledRow = 1;

function eventToColors() {
  const colors = document.querySelectorAll('.select-color');

  colors.forEach(element => element.addEventListener('click' , () => clickColor(element.classList[1])));
}

function clickColor(colorName) {
  const rowList = document.querySelectorAll('.row');
  const rowColors = rowList[filledRow].querySelectorAll('.colors');
  Array.from(rowColors).find(element => element.classList.length === 1).classList.add(colorName);
}

const randomColor = () => {
  const colors = ['blue', 'red', 'yellow', 'green', 'purple', 'orange'];
  return colors[Math.floor(Math.random() * colors.length)]
}

const generateColors = () => {
  const colors = answer.querySelectorAll('.colors');
  colors.forEach(element => element.classList.add(randomColor()));
}

window.onload = () => {
  eventToColors();
  generateColors()
}