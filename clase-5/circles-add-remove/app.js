let container;
let templateCirculo;
let btnAgregar;

const onClickBtnAgregar = event => {
  const circleContainer = document.createElement('div');
  circleContainer.classList.add('circle-container');
  circleContainer.innerHTML = templateCirculo.innerHTML;
  container.appendChild(circleContainer);
}

const cache = () => {
  container = document.querySelector('#container');
  templateCirculo = document.querySelector('#tpl-circle');
  btnAgregar = document.querySelector('#btn-agregar');
};

const listeners = () => {
  btnAgregar.addEventListener('click', onClickBtnAgregar);
};

const init = () => {
  cache();
  listeners();
};

document.addEventListener('DOMContentLoaded', init);
