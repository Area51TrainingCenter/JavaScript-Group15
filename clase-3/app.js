console.log('OK');


// .getElementById
// .getElementsByClassName
// .getElementsByTagName

// .querySelector
// .querySelectorAll



// Cantidad de elementos <a> en todo el documento
const items1 = document.getElementsByTagName('a');
console.log(items1.length);

// Cantidad de elementos <a> en el menu
// const items2 = document.getElementsByClassName('menu__item');
// const items2 = document.querySelectorAll('.menu__item');
// const items2 = document.querySelectorAll('.menu .menu__item');
// const items2 = document.querySelectorAll('.menu a');

// const cabecera = document.getElementById('cabecera');
// const items2 = cabecera.getElementsByTagName('a');

const navMain = document.getElementsByClassName('nav-main')[0];
const items2 = navMain.getElementsByTagName('a');

console.log(items2.length);


const items3 = document.querySelectorAll('article a');
console.log(items3.length);


// EVENTOS

// const menuItem = document.querySelector('.menu__item');

// menuItem.addEventListener('click', (event) => {
//   event.preventDefault(); // Cancela la acción por defecto del elemento cliqueado

//   console.log('Inicio');
// });



// Deconstructores
// [ ...array ]
// { ...object }
// const { a, b, c } = object;
// const [ a, b, c ] = array;



// const menuItems = document.querySelectorAll('.menu__item');
const menuItems = [...document.querySelectorAll('.menu__item')];

const onClickMenuItems = event => {
  event.preventDefault();

  const link = event.currentTarget;
  console.log('click href:', link.getAttribute('href'));
  console.log('click text:', link.textContent);

  // link.style.color = 'red'; // Sí cambia el HTML
  link.classList.add('colorVerde'); // Sí cambia el HTML


  if ( link.getAttribute('href') === '#nosotros' ) {
    const parrafo = document.querySelector('article p:nth-child(2)');
    console.log( parrafo.textContent );
  }
};

// menuItems.forEach( item => item.addEventListener('click', onClickMenuItems) );
menuItems.forEach(item => {
  item.addEventListener('click', onClickMenuItems);
});
// .textContent , .innerHTML


document.getElementById('nosotros').addEventListener('click', event => {
  console.log(document.getElementById('parrafo2').textContent);
});





// =>

class Persona {
	constructor(nombre) {
		this._nombre = nombre;
	}

	get nombre() {
		return this._nombre;
	}

	// set nombre(value) {
	// 	this._nombre = value;
	// }
}
const persona1 = new Persona('Renzo');
console.log(persona1.nombre); // OK
console.log(persona1._nombre); // OK
persona1.nombre = 'Lucho'; // ERROR


const persona2 = {
	nombre: 'Renzo',

	// saludo: function() {
	saludo() {
		console.log(this.nombre);
	}
};
persona2.nombre = 'Lucho';




const nombre = 'Diana';
const edad = 22;

const persona3 = { nombre, edad };

