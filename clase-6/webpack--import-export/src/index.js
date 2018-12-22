import { sumar, multiplicar } from './libs/utils';
import { numeroALetras } from './libs/conversion';


const saludo = 'Hola mundo!';
console.log(`saludo: ${saludo}`);


let resultado

resultado = sumar(3, 5);
console.log(resultado);

resultado = multiplicar(3, 5);
console.log(resultado);



// ./lib/conversion.js
// Función "numeroALetras" con alcance de 0 a 10

console.log(numeroALetras(2));
// "Dos"

console.log(numeroALetras(10));
// "Diez"

console.log(numeroALetras(0));
// "Cero"



// YAPE

let formulario;
let contactoSelectElement;
let montoElement;

const onLoadContactos = contactos => {
  contactos.forEach(contacto => {
    let optionElement = document.createElement('option');
    optionElement.value = contacto.id;
    optionElement.text = contacto.nombre;

    contactoSelectElement.appendChild(optionElement);
  });
};

const loadContactos = () => {
  console.log('loading...');
  fetch('http://localhost:3000/yape-contactos')
    .then(response => response.json())
    // .then(json => console.log(json))
    .then(onLoadContactos);
};

const hacerPago = data => {
  fetch(
    'http://localhost:3000/yape-pagos',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    }
  )
  .then(response => response.json() )
  .then(json => console.log(json));
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
};

const listeners = () => {
  formulario.addEventListener('submit', onSubmitFormulario);
};

const init = () => {
  cache();
  listeners();
  loadContactos();
};

init();

