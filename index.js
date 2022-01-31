const target = document.querySelectorAll('.square');

target.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.classList.add('colors');
  });
});

const button = document.querySelector('button');

button.addEventListener('click', () => {
  const remove = document.querySelectorAll('.square');
  remove.forEach((item) => {
    item.classList.remove('colors');
  });
});
