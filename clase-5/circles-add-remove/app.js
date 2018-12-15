let container;
let templateCirculo;
let btnAgregar;
let btnEliminar;
let acumulador;

const onClickBtnAgregar = event => {
  event.preventDefault();

  // if (container.children.length == 0) {
  //   acumulador = 1;
  // } else {
  //   acumulador += 1;
  // }

  acumulador = container.children.length + 1;

  const circleContainer = document.createElement('div');
  circleContainer.classList.add('circle-container');

  let html = templateCirculo.innerHTML
  html = html.replace(/\{\{numero\}\}/g, acumulador);

  circleContainer.innerHTML = html;

  circleContainer.addEventListener('click', onClickCircle);
  
  container.appendChild(circleContainer);
}

const onClickBtnEliminar = event => {
  event.preventDefault();

  // OPCIÓN 1
  // const circleContainer = container.querySelector('.circle-container:last-child');


  // OPCIÓN 2
  const circleContainers = [...container.querySelectorAll('.circle-container')];
  const circleContainer = circleContainers[circleContainers.length - 1];
  

  if (circleContainer != undefined) {
    container.removeChild( circleContainer );
  }
};

const onClickCircle = event => {
  console.log('click');

  const circleContainer = event.currentTarget;
  
  container.removeChild(circleContainer);
};

const cache = () => {
  container = document.querySelector('#container');
  templateCirculo = document.querySelector('#tpl-circle');
  btnAgregar = document.querySelector('#btn-agregar');
  btnEliminar = document.querySelector('#btn-eliminar');
};

const listeners = () => {
  btnAgregar.addEventListener('click', onClickBtnAgregar);
  btnEliminar.addEventListener('click', onClickBtnEliminar);
};

const setup = () => {
  
};

const init = () => {
  cache();
  listeners();
  setup();
};

document.addEventListener('DOMContentLoaded', init);
