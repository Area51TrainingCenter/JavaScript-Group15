import { api } from './libs/api';

console.log('USANDO API (FETCH CON AYUDA DE OTRA FUNCIÓN SIMPLE)');

let formulario;
let contactoSelectElement;
let montoElement;
let pagosElement;

const onLoadContactos = contactos => {
  contactos.forEach(contacto => {
    let optionElement = document.createElement('option');
    optionElement.value = contacto.id;
    optionElement.text = contacto.nombre;

    contactoSelectElement.appendChild(optionElement);
  });
};

const onLoadPagos = pagos => {
  pagos.forEach(insertarPago);
};

const insertarPago = data => {
  let row = document.createElement('tr');
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');

  td1.textContent = data.contactoId;
  td2.textContent = data.monto;

  row.appendChild(td1);
  row.appendChild(td2);

  pagosElement.appendChild(row);
};

const loadContactos = () => {
  console.log('Contactos loading...');
  api.get('http://localhost:3000/yape-contactos')
    .then(onLoadContactos);
};

const loadPagos = () => {
  console.log('Pagos loading...');
  api.get('http://localhost:3000/yape-pagos')
    .then(onLoadPagos);
};

const hacerPago = data => {
  api.post('http://localhost:3000/yape-pagos', data)
    .then(insertarPago);
};

const onSubmitFormulario = event => {
  event.preventDefault();

  // const options = contactoSelectElement.options;
  // const selectedIndex = contactoSelectElement.selectedIndex;
  const { options, selectedIndex } = contactoSelectElement;

  const data = {
    contactoId: options[selectedIndex].value,
    monto: montoElement.value
  };

  hacerPago(data);
};

const cache = () => {
  formulario = document.querySelector('#js-form');
  contactoSelectElement = document.querySelector('#js-contacto');
  montoElement = document.querySelector('#js-monto');
  pagosElement = document.querySelector('#js-pagos');
};

const listeners = () => {
  formulario.addEventListener('submit', onSubmitFormulario);
};

export const init = () => {
  cache();
  listeners();
  loadContactos();
  loadPagos();
};
