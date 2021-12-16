function eventToColors() {
  const colors = document.querySelectorAll('.select-color');

  colors.forEach((element) => {
    element.addEventListener('click' , () => {
      let elementClass = element.className;
      elementClass = elementClass.replace('select-color', '');
      console.log(elementClass);
    });
  })
}

window.onload = () => {
  eventToColors();
}