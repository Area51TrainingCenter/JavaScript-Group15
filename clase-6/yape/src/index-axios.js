import * as axios from 'axios';

console.log('USANDO AXIOS (Modulo NPM, por debajo usa fetch)');

let formulario;
let contactoSelectElement;
let montoElement;
let pagosElement;

const onLoadContactos = ({ data }) => {
  data.forEach(contacto => {
    let optionElement = document.createElement('option');
    optionElement.value = contacto.id;
    optionElement.text = contacto.nombre;

    contactoSelectElement.appendChild(optionElement);
  });
};

const onLoadPagos = ({ data }) => {
  data.forEach(insertarPago);
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
  axios.get('http://localhost:3000/yape-contactos')
    .then(onLoadContactos);
};

const loadPagos = () => {
  console.log('Pagos loading...');
  axios.get('http://localhost:3000/yape-pagos')
    .then(onLoadPagos);
};

const hacerPago = data => {
  axios.post('http://localhost:3000/yape-pagos', data)
    // .then((response) => insertarPago(response.data));
    .then(({ data }) => insertarPago(data));
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
