const answer = document.getElementById('answer');
let rightColor = [];
let filledRow = 1;
let actualRow = [];

const eventToColors = () => {
  const colors = document.querySelectorAll('.select-color');
  colors.forEach(element => element.addEventListener('click' , () => makeMove(element.classList[1])));
}

const verifyRow = (actual) => {
  let rightClone = [...rightColor];

  const hint = {
    green: 0,
    yellow: 0
  }

  actual.forEach((color, index) => {
    if(rightColor[index] === actual[index]) {
      hint.green += 1;
      hint.yellow -= 1;
    }

    if(rightClone.includes(color)) {
      let result = rightClone.indexOf(color);
      hint.yellow += 1;
      rightClone.splice(result, 1);
    }
  });
}

function makeMove(colorName) {
  const rowList = document.querySelectorAll('.row');
  const rowColors = rowList[filledRow].querySelectorAll('.colors');
  const result = Array.from(rowColors).find(element => element.classList.length === 1);
  if (result) {
    result.classList.add(colorName);
    actualRow.push(colorName);
    if (actualRow.length === 4) {
      verifyRow(actualRow);
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
  const colorsElement = answer.querySelectorAll('.colors');
  for (let i = 0; i < 4; i += 1) {
    rightColor.push(randomColor());
  }
  colorsElement.forEach((element, index) => element.classList.add(rightColor[index]));
}

window.onload = () => {
  eventToColors();
  generateColors()
}