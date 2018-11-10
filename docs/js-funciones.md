# Funciones

```js
function saludo() {
	console.log('Hola!');
}

saludo();
```

Usando una variable del scope superior:

```js
let nombre = 'Carlos';

function saludo() {
	console.log('Hola ' + nombre + '!');
}

saludo();
```

Usando un parámetro:

```js
function saludo(nombre) {
	console.log('Hola ' + nombre + '!');
}

saludo('Carlos');
```

Llenado de un Array usando una función:

```js
let categorias = [];

function insertarCategoria(nombreCategoria) {
	categorias.push(nombreCategoria);
}

insertarCategoria('Computadoras');
insertarCategoria('Audio y Video');
```

Llenado de un Array formateado como tabla de multiplicar del 2:
```js
let tabla = [];

function agregarLinea(n) {
	tabla.push('2 x ' + n + ' = ' + (2 * n));
}

agregarLinea(1);
agregarLinea(2);
agregarLinea(3);
agregarLinea(4);
agregarLinea(5);

console.log(tabla);
/*
[
	'2 x 1 = 2',
	'2 x 2 = 4',
	'2 x 3 = 6',
	'2 x 4 = 8',
	'2 x 5 = 10'
]
*/
```

## 3 formas para crear funciones

```js
// 1.
// ES5+ (ES5, ES6+, etc)
function saludo() {
  console.log("Hola Área51");
}

// [DEPRECIADO]
// ES5 (Legacy)
var saludo = function () {
  console.log("Hola Área51");
};

// 2.
// ES6+
const saludo = function () {
  console.log("Hola Área51");
};

// 3.
// Arrow function (Recomended)
const saludo = () => {
  console.log("Hola Área51");
};
```

