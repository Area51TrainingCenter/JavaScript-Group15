# Condicionales

```js
const GENERO_MASCULINO = 'M';
const GENERO_FEMENINO = 'F';

const persona = {
	nombre: 'Luis',
	genero: GENERO_MASCULINO,
	edad: 18
};


// && : and
// || : or

if ( persona.edad >= 18 ) {
  console.log('Es mayor de edad');
  
  if ( persona.genero === GENERO_FEMENINO ) {
    console.log('Puede entrar en discoteca');
  }
}

if ( persona.edad >= 18 && persona.genero === GENERO_FEMENINO ) {
  console.log('Puede entrar en discoteca');
}

if ( 1 === 1 && 2 === 2 || 3 === 4 ) {
}

// (  true   &&   false ||  false  )
// (  true   &&       false        )
// (         false                 )

if ( 1 === 1 && 2 === 3 || 3 === 4 ) {
}


true && true // true
true && false // false
false && true // false
false || true // true
false && false // false


if ( 1 === 1 && 2 === 2 || 3 === 4 ) { // true
  console.log('OK');
}

if ( 1 === 2 || 2 === 3 || 3 === 3 ) { // true
  console.log('OK');
}

if ( 1 === 2 || (2 === 3 || 3 === 3) ) { // true
  console.log('OK');
}

//    false  || (       true       ) &&   true  =>   true
if ( 1 === 2 || (2 === 3 || 3 === 3) && 2 == 2 ) { // true
  console.log('OK');
}

let nombre;

// 0 => false
// undefined => false
// null => false
// "" => false

let nombre = "Alberto";

if ( nombre ) {
  console.log('La variable "nombre" contiene un valor');
}

if ( nombre.length ) {
  console.log('La variable "nombre" contiene un valor');
}


let apellido = "";

if ( apellido.length ) {
  console.log('Variable "apellido" NO contiene un valor válido para mi Base de Datos.')
}



let apellido = "Ren zo";

if ( apellido.trim().length ) {
  console.log('Variable "apellido" NO contiene un valor válido para mi Base de Datos.')
}

// Reemplazando los espacios por vacio

if ( apellido.replace(' ', '').length ) {
  console.log('Variable "apellido" NO contiene un valor válido para mi Base de Datos.')
}

// Usando "Expresiones Regulares" (Regular Expression o regexp)
if ( apellido.replace(/ /g, '').length ) {
  console.log('Variable "apellido" NO contiene un valor válido para mi Base de Datos.')
}

// Otra forma

if ( apellido.replace(/\s/g, '').length ) {
  console.log('Variable "apellido" NO contiene un valor válido para mi Base de Datos.')
}

// Google: regexp online
```