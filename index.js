function addColor() {
  const target = document.querySelectorAll('.square');

  target.forEach((item) => {
    item.addEventListener('mouseover', () => {
      item.classList.add('colors');
    });
  });
}

function resetButton() {
  const button = document.querySelector('#reset');

  button.addEventListener('click', () => {
    const remove = document.querySelectorAll('.square');
    remove.forEach((item) => {
      item.classList.remove('colors');
    });
  });
}

const size = 50;

function createRows() {
  for (let i = 0; i < size; i += 1) {
    const target = document.querySelector('#outer-container');
    const div = document.createElement('div');
    div.classList.add('row');

    target.appendChild(div);
    console.log(i);
  }
}

function addClass() {
  const content = document.querySelectorAll('.row');
  content.forEach((item) => {
    item.classList.add('colors');
    console.log(item);
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
    console.log(rows[item]);
  });
}

createRows();
addClass();
fillRows();
addColor();
resetButton();
