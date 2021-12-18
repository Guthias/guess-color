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
  if (hint.green === 4) showWin();
  return hint;
}

function makeMove(colorName) {
  const rowList = document.querySelectorAll('.row');
  const rowColors = rowList[filledRow].querySelectorAll('.colors');
  const result = Array.from(rowColors).find(element => element.classList.length === 1);
  if (result) {
    result.classList.add(colorName);
    actualRow.push(colorName);
    if (actualRow.length === 4) {
      renderHint(verifyRow(actualRow), filledRow);
      filledRow += 1;
      actualRow = [];
    }
  }
}

const renderHint = (hint, row) => {
  const rowList = document.querySelectorAll('.row');
  const hintItem = rowList[row].querySelectorAll('.hint');
  for (let i = 0; i < 4; i += 1) {
    if (hint.green > i) {
      hintItem[i].classList.add('green');
    } else if (hint.green + hint.yellow > i) {
      hintItem[i].classList.add('yellow');
    } else {
      hintItem[i].classList.add('red');
    }
  }
}

const randomColor = () => {
  const colors = ['blue', 'red', 'yellow', 'green', 'purple', 'orange'];
  return colors[Math.floor(Math.random() * colors.length)]
}

const showWin = () => {
  showAnswer();
  customAlert('Você venceu', 'Parabéns você venceu :D');
}

const showAnswer = () => {
  answer.classList.add('show');
}

const generateColors = () => {
  const colorsElement = document.querySelectorAll('.answer-colors .colors');
  for (let i = 0; i < 4; i += 1) {
    rightColor.push(randomColor());
  }
  colorsElement.forEach((element, index) => element.classList.add(rightColor[index]));
}

const customAlert = (title, content) => {
  const element = document.createElement('div');
  element.className = 'custom-alert-background';
  element.id = 'custom-alert';

  element.innerHTML = `<div class="custom-alert-area">
    <div class="custom-alert-header">
      <div class="custom-alert-title">
        ${title}
      </div>
    </div>
    <div class="custom-alert-body">
     ${content}
    </div>
    <div class="custom-alert-bottom"></div>
  </div>`

  element.addEventListener('click', (event) => {
    if(event.target === document.getElementById('custom-alert')) {
      document.getElementById('custom-alert').remove();
    }
  })
  document.getElementById('body').appendChild(element);  
}

window.onload = () => {
  eventToColors();
  generateColors()
}