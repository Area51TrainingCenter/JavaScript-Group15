let container;
let templateCirculo;
let btnAgregar;
let btnEliminar;

const onClickBtnAgregar = event => {
  event.preventDefault();

  const circleContainer = document.createElement('div');
  circleContainer.classList.add('circle-container');

  circleContainer.innerHTML = templateCirculo.innerHTML;
  
  container.appendChild(circleContainer);
}

const onClickBtnEliminar = event => {
  event.preventDefault();

  // OPCIÓN 1
  // const circleContainer = container.querySelector('.circle-container:last-child');

  // OPCIÓN 2
  const circleContainers = [...container.querySelectorAll('.circle-container')];
  const circleContainer = circleContainers[circleContainers.length - 1];

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
