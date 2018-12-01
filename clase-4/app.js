const inputs = [...document.querySelectorAll('.form-control')];

const onFocusInput = event => {
  console.log('FOCUS!', event.currentTarget);
};
const onBlurInput = event => {
  console.log('BLUR!', event.currentTarget);
  const element = event.currentTarget;

  if (element.value.trim().length < 2) {
    element.classList.add('invalid');
  } else {
    element.classList.remove('invalid');
  }
};

inputs.forEach(input => {
  input.addEventListener('focus', onFocusInput);
  input.addEventListener('blur', onBlurInput);
});



const btn = document.querySelector('.btn');
const txtNombre = document.querySelector('#txt-nombre');
const txtApellido = document.querySelector('#txt-apellido');
const txtEdad = document.querySelector('#txt-edad');
const formulario = document.querySelector('.form');

// on NOMBRE-EVENTO ELEMENTO
const onClickButton = event => {
  // event.preventDefault();
  // event.currentTarget

  console.log('Área51 Training Center');

  txtNombre.value = 'Jennifer';
  txtApellido.value = 'Lopez';
};
btn.addEventListener('click', onClickButton);


const onSubmitForm = event => {
  event.preventDefault();

  const data = {
    nombre: txtNombre.value,
    apellido: txtApellido.value,
    edad: txtEdad.value
  };
  console.log(data);

  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  // ES5
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.addEventListener('load', event => {
    console.log(xhr.responseText);
  });
  xhr.send();

  // // ES6
  // GET
  fetch(url)
    .then(response => response.json())
    .then(json => console.log(json));

  // POST (no funcionará porque el servidor no esta preparado para escuchar POST en este ejemplo)
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(json => console.log(json));


  // jQuery
  // $.get(url, response => console.log(response));
  // $.post(url, data, response => console.log(response));

};
formulario.addEventListener('submit', onSubmitForm);


/*
REQUERIMIENTO:
  Cuando tiene menos de 2 letras debes usar la clase "invalid".
USAR:
  element.classList.add('');
  element.classList.remove('');
*/
