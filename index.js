const size = 10;

function addColor(color) {
  const target = document.querySelectorAll('.square');

  target.forEach((item) => {
    item.addEventListener('mouseover', () => {
      console.log(`this is the current color: ${color}`);
    });
  });
}

function resetButton() {
  const reset = document.querySelector('#reset');

  reset.addEventListener('click', () => {
    const remove = document.querySelectorAll('.square');
    remove.forEach((item) => {
      item.classList.remove('color-black');
      item.classList.remove('color-orange');
    });
  });
}
function blackButton() {
  const targetBlack = document.querySelector('#black');
  const black = 'color-black';
  targetBlack.addEventListener('click', addColor(black));
  targetBlack.removeEventListener('click', addColor(black));
}

function createRows() {
  for (let i = 0; i < size; i += 1) {
    const target = document.querySelector('#outer-container');
    const div = document.createElement('div');
    div.classList.add('row');

    target.appendChild(div);
  }
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
  const defaultColor = 'color-orange';
  createRows();
  fillRows();
  addColor(defaultColor);
  blackButton();
  resetButton();
}

startDrawing();
