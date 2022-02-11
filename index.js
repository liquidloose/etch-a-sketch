/* eslint-disable no-param-reassign */
let size = 5;

function randomColor() {
  const random = Math.floor(Math.random() * 16777215).toString(16);
  return random;
}

function addColor(color) {
  const target = document.querySelectorAll('.square');
  target.forEach((item) => {
    item.addEventListener('mouseover', () => {
      if (color === 'orange' || color === 'rgb(20, 11, 11)') {
        item.style.backgroundColor = color;
      } else if (color === 'rainbow') {
        item.style.backgroundColor = randomColor();
      }
    });
  });
}

function resetButton() {
  const reset = document.querySelector('#reset');

  reset.addEventListener('click', () => {
    const remove = document.querySelectorAll('.square');
    remove.forEach((item) => {
      item.style.backgroundColor = 'beige';
    });
  });
}

function bindButtons() {
  const buttons = document.querySelectorAll('#black , #orange, #rainbow, #reset');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.id === 'black') {
        addColor('rgb(20, 11, 11)');
      } else if (button.id === 'orange') {
        addColor('orange');
      } else if (button.id === 'rainbow') {
        addColor('rainbow');
      } else if (button.id === 'reset') {
        resetButton();
        addColor('orange');
      }
    });
  });
}

function createRows() {
  for (let i = 0; i < size; i += 1) {
    const target = document.querySelector('#outer-container');
    const div = document.createElement('div');
    div.classList.add('row');
    target.appendChild(div);
  }
}

function delRows() {
  const rows = document.querySelectorAll('.row');
  rows.forEach((item) => {
    item.remove();
  });
}

function fillRows() {
  const rows = document.querySelectorAll('.row');
  rows.forEach((item) => {
    for (let j = 0; j < size; j += 1) {
      const squares = document.createElement('div');
      squares.classList.add('square');
      item.appendChild(squares);
    }
  });
}

function startDrawing() {
  createRows();
  fillRows();
  addColor('orange');
  bindButtons();
  resetButton();
}

function sliderStop() {
  const i = document.querySelector('input');
  console.log(i.value);
  size = i.value;
  delRows();
  startDrawing();
}

function slider() {
  const i = document.querySelector('input');
  i.addEventListener('mouseup', sliderStop);
  size = i.value;
}

startDrawing();
slider();
