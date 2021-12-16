let filledRow = 1;

function eventToColors() {
  const colors = document.querySelectorAll('.select-color');

  colors.forEach((element) => {
    element.addEventListener('click' , () => {
      let elementClass = element.className;
      elementClass = elementClass.replace('select-color ', '');
      clickColor(elementClass);
    });
  })
}

function clickColor(colorName) {
  const rowList = document.querySelectorAll('.row');
  const rowColors = rowList[filledRow].querySelectorAll('.colors');
  Array.from(rowColors).find(element => element.classList.length === 1).classList.add(colorName);
}

window.onload = () => {
  eventToColors();
}