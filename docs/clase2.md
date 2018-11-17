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

#### Soluciones
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
```

## Operadores Lógicos

```
== // Igual a
!= // Distinto de
< // menor que
> // mayor que

<= // menor o igual a
>= // mayor o igual a
=< // ERROR
=> // ERROR

=== // Estrictamente igual a
```

```js
1 == 1 // verdadero
1 === 1 // verdadero

true == 1 // verdadero
true === 1 // falso
```

## Condicionales

```js
// sintaxis
if (condición) {
  // código que se ojecutará si la condición es verdadera
}
```

#### Ejemplos

```js
if (true) {
  console.log('Soy verdadero');
} else {
  console.log('Soy falso');
}
// Soy verdadero

if (false) {
  console.log('Soy verdadero');
} else {
  console.log('Soy falso');
}
// Soy falso
```
```js
const edad = 17;

if (edad >= 18) {
  console.log('Es mayor de edad');
} else {
  console.log('Es menor de edad');
}
```


#### Tipos de IF...ELSE
```js
if () {
  
}



if () {
  
} else {

}



if () {
  
} else if () {

} else {

}
```

```js
// iife: Immediately-invoked function expression
(function () {
  console.log('Hola');
}())
```


### Ejercicios

Crear una función que reciba un parámetro de tipo numérico, y al ejecutarlo muestre en consola si el número es par o impar.

```js
function ejercicio1(n) {
  if (n % 2 == 0) {
    console.log(`${n} es par`);
  } else {
    console.log(`${n} es impar`);
  }
}
```

```js
function esPar(n) {
  return n % 2 == 0;
}

function ejercicio1(n) {
  if (esPar(n)) {
    console.log(`${n} es par`);
  } else {
    console.log(`${n} es impar`);
  }
}

ejercicio1(4);
```

# Ejercicio 2

A Pedro le interesa Rosita. Y la quiere saludar de una forma más amigable que al resto de chicas.

1. Durante el día verá a Anita, Rosita, Juana.

2. Durante el día verá:
['Diana', 'Lucia', 'Yssenia', 'Rosita', 'Juana', 'Anita']

```js
function saludo(nombre) {
 if (nombre === 'Rosita') {
   console.log(`Hola ${nombre}. Que bonito día, no?`);
 } else {
   console.log(`Hola ${nombre}`);
 }
}

// 1.
saludo('Anita');
saludo('Rosita');
saludo('Juana');

// 2.
const chicas = ['Diana', 'Lucia', 'Yessenia', 'Rosita', 'Juana', 'Anita']:

// 2.A.
for(let i = 0; i < chicas.length; i++) {
  saludo( chicas[i] );
  // continue;
  // break;
}

// 2.B.
chicas.forEach(nombre => saludo(nombre));

// 2.C. (RECOMENDADA)
chicas.forEach(saludo);
```

```js
function sumar (a, b) {

}
numeros.reduce(sumar);
numeros.reduce((a, b) => sumar(a, b));
```

## Funciones de un String
```
STRING
.length
.trim
.charAt
.concat
.split
```

Es común usar una función de un Array cuando se trabaja con `String`.

```
ARRAY
.join
```

### Ejercicios

```js
const nombres = [' Luis ', 'Pablo  ', '  German', 'Diego'];
const apellidoPaterno = ' Gutierrez';

// 1. Hijos de una misma familia. Formar sus nombres completos.
//    (Los nombres no deben contener espacios de más).

// Mostrar en consola:
//   ["Luis Gutierrez", "Pablo Gutierrez", "German Gutierrez", 
//    "Diego Gutierrez"]

// Pista: Usar .map .trim

const hijos = nombres.map(nombre => {
  return `${nombre.trim()} ${apellidoPaterno.trim()}`
});
console.log(hijos);


// 2. Luis le debe 50 soles a German. Crear una función PAGAR
//    que reciba el nombre de 2 personas y 1 monto. Mostrar
//    en consola una oración indicando las personas y el monto pagado.

function pagar(personaQuePaga, personaAPagar, monto) {
  console.log(`${personaQuePaga.trim()} le pagará a ${personaAPagar.trim()} el monto de ${monto}`);
  // console.log(''.concat(personaQuePaga).concat(' le pagará a ')... );
}

pagar('Luis', 'German', 50);
pagar(nombres[0], nombres[2], 50);


// 3. ¿Cuantos hijos tiene la familia Gutierrez?

//    Mostrar en consola
//    Pista: Usar .length

console.log(nombres.length);


// 4. Luis llevará a todos sus hermanos a un concierto.
//    Se requiere que todos suban al auto.

//    Tenemos:

const auto = {
  personas: []
}

function SubirAlAuto(persona) {
  auto.personas.push(persona);
}

// Pista: Usar .forEach

// Respuesta
nombres.forEach(SubirAlAuto);
```

