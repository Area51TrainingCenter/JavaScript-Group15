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

### Explicación corta
```js
.forEach // No retorna
.map // Retorna un array
.reduce // Retorna el mismo tipo de dato de los elementos de la lista
.filter // Retorna un array
```

```js
const lista = [1, 2, 3, 4];

lista.forEach(n => console.log(n));
lista.map(n => n + 2); // [3, 4, 5, 6]
lista.reduce((a, b) => a + b ); // 10
lista.filter(n => n % 2 == 0); // [2, 4]
```

#### Ejercicios
```js
const letras = ['a', 'b', 'c', 'd'];
const numeros = [3, 5, 7, 10];

letras
// 'abcd'

letras
// 'aabbccdd'

numeros
// [7, 11, 15, 21]

numeros
// 25

numeros
// [5, 10]
```

#### Soluciones
```js
letras
// 'abcd'
// Pista: reduce, `Hola ${nombre}, ${mensaje}`
letras.reduce((a, b) => `${a}${b}`);

letras
// 'abbccdd'
// Pista: reduce, `Hola ${nombre}, ${mensaje}${mensaje}`
letras.reduce((a, b) => `${a}${b}${b}`);

numeros
// [7, 11, 15, 21]
// Pista: map, por 2 más 1
letras.map(n => (n * 2) + 1);

numeros
// 25
// Pista: reduce, suma
letras.reduce((a, b) => a + b);

numeros
// [5, 10]
// Pista: filter, multiplo de 5
letras.filter(n => n % 5 == 0);
````
