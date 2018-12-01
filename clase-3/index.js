const link = document.querySelector('#nosotros');

// Forma 1
link.addEventListener('click', event => {
  event.preventDefault();
  console.log('NOSOTROS!');
});

// Forma 2
const onClickLink = event => {
  event.preventDefault();
  console.log('click!');
};
link.addEventListener('click', onClickLink);

// ===========

const elementsNode = document.querySelectorAll('.menu__item');
const elementsArray = [...elementsNode];

elementsArray.forEach(element => {
  element.addEventListener('click', onClickLink);
});
