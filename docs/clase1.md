# Clase 1: Practicando

## Tipos de Datos revisados en clase

- STRING
- NUMBER
- BOOLEAN
- OBJECT
- ARRAY
- FUNCTION


## Objeto y función

```js
const miConsola = {};

miConsola.nombre = 'Consola';

miConsola.log = () => {
  alert('Hola');
};
```

```js
const auto = {};

auto.km = 0;

auto.conducir = () => {
  auto.km = auto.km + 10;
};

auto.conducir();
auto.conducir();

console.log(auto.km); // 20
```


## Funciones con parámetros

```js
function saludo(nombre, mensaje) {
  console.log('Hola', nombre, '!', mensaje);
}

function sumar(a, b) {
  console.log(a + b);
}
```

## Bucle / Iterador: For

```js
for (let i = 0; i < 5; i = i + 1){
  console.log(i);
}

for (let i = 0; i < 5; i += 1){
  console.log(i);
}
```

```js
for (let i = 0;  i < 5;  i += 1){
  console.log(i);
}

for (let i = 0;  i < 10;  i += 1){
  console.log(i + 1);
}

for (let i = 1;  i < 11;  i += 1){
  console.log(i);
}

for (let i = 1;  i <= 10;  i += 1){
  console.log(i);
}
```

```js
function tablaMultiplicar(n) {
  for (let i = 1; i <= 5; i += 1) {
    // console.log(3, '*', i, '=', i * 3);
    // console.log(`3 * ${i} = ${i * 3}`);
    console.log(`${n} * ${i} = ${i * n}`);
  }
}

tablaMultiplicar(3);
tablaMultiplicar(4);
tablaMultiplicar(5);

// 3 * 1 = 3
// 3 * 2 = 6
// 3 * 3 = 9
// 3 * 4 = 12
// 3 * 5 = 15
```

## String: Concatenando (Template Literals ES6)

```js
const nombre = 'Luisa';
const mensaje = `Hola ${nombre}. Buen día.`;

console.log(mensaje);
```
