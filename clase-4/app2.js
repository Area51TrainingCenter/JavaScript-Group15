// BUTTON (click)

const btn = document.querySelector('.btn');

const onClickBtn = event => {
  event.preventDefault();
  console.log('Clase 4');
};
btn.addEventListener('click', onClickBtn);


// NOMBRE (focus)

const txtNombre = document.querySelector('#txt-nombre');

const onFocusNombre = event => {
  // event.preventDefault(); // NO ES NECESARIO
  console.log('Focus');
};

txtNombre.addEventListener('focus', onFocusNombre);
