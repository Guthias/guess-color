const answer = document.getElementById('answer');
let filledRow = 1;
let actualRow = [];

const eventToColors = () => {
  const colors = document.querySelectorAll('.select-color');
  colors.forEach(element => element.addEventListener('click' , () => makeMove(element.classList[1])));
}

function makeMove(colorName) {
  const rowList = document.querySelectorAll('.row');
  const rowColors = rowList[filledRow].querySelectorAll('.colors');
  const result = Array.from(rowColors).find(element => element.classList.length === 1);
  if (result) {
    result.classList.add(colorName);
    actualRow.push(colorName);
    if (actualRow.length === 4) {
      filledRow += 1;
      actualRow = [];
    }
  }
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