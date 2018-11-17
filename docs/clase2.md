# Pasando funciones dentro de otras funciones

```
.map, .reduce, .filter, .forEach
```


### Tipos de Datos

```js
const texto = "Área51";
const numero = 34;
const logico = true;
const obj = {};
const arreglo = [];
const f = function () { };
```

### Entendiendo .map
```js
function tabla(n) { // n contendrá un número
  
}

tabla(3);
```

```js
function map (pepito) { // pepito contendrá una función
  
}

map( function (numero) { } )
```

### Ejercicios
Usando alguna de las funciones Array: `.map` , `.forEach` , `.reduce` y `.filter`.

```js
// Ejercicio 1

const edades = [20, 23, 29, 35];
// [22, 25, 31, 37]
```

### Formas abreviadas para las funciones flecha
```js
const doble = function (numero) {
  return numero + numero;
};

const doble = (numero) => {
  return numero + numero;
};

const doble = numero => {
  return numero + numero;
};

const doble = n => n + n;

const doble = numero => numero + numero;
const suma = (a, b) => a + b;
const saludo = () => suma(2, 5);
```
