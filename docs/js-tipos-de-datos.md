# Tipos de datos

## String
```js
'Area51 Training Center'
```
```js
const nombreCompleto = 'Renzo Castro'; // String
```

## Number
```js
51
```
```js
const area = 51; // Number
```

## Boolean
```js
false
true
```
```js
const cursosOnline = false; // Boolean
```

## Object
```js
const miObjeto = {};


const auto1 = { marca: 'Toyota', color: 'Azul' };

const auto2 = {
  marca: 'Nissan',
  color: 'Verde'
};

const auto3 = {};
auto3.marca = 'Ford';
auto3.color = 'Gris';
auto3.tieneAlarma = true;

auto3.piezas = {};
auto3.piezas.motor = 'v8';
```

## Array
```js
const miArreglo = [];


const edades = [21, 33, 27];

const amigos = [];
amigos.push('Pedro');
amigos.push('Lucas');
amigos.push('Juan');


const colores = ['blanco', 'verde', 'rojo'];
colores.push('azul');

console.log(colores); // (4) ["blanco", "verde", "rojo", "azul"]
console.log(colores[2]); // "rojo"
console.log(colores[1 + 1]); // "rojo"
```


### Creando estructuras de datos

```js
const menu = [
  {
    name: 'Inicio',
    url: '/index.html'
  },
  {
    name: 'Productos',
    url: '/productos.html'
  }
];
```

```js
const menu = [
  {
    name: 'Inicio',
    url: '/index.html'
  },
  {
    name: 'Productos',
    children: [
      {
        name: 'Secadora',
        url: 'productos/secadora.html'
      },
      {
        name: 'Lavadora',
        url: 'productos/lavadora.html'
      },
      {
        name: 'Escobas',
        url: 'productos/escobas.html'
      },
    ]
  }
];
```

### Ejercicio:
Un padre tienes 2 hijos, cada hijo tiene un nombre y una edad.

```js
const padre = {
  nombre: 'Julio',
  hijos: [
    {
      nombre: 'Pedro',
      edad: 12
    },
    {
      nombre: 'Juan',
      edad: 7
    }
  ]
};

console.log(padre.hijos[0].nombre); // Pedro
```

```js
const padre = {
  nombre: 'Julio',
  hijos: [
    {
      nombre: 'Pedro',
      edad: 36,
      hijos: [
        {
          nombre: 'Mateo',
          edad: 3
        },
        {
          nombre: 'Diana',
          edad: 1
        }
      ]
    },
    {
      nombre: 'Juan',
      edad: 17
    }
  ]
};

console.log(padre.hijos[0].hijos[1].nombre); // Diana
```

```js
const tabla1 = [
	{ name: 'AmeriGas', shares: 200 },
	{ name: 'Duke Energy', shares: 150 }
];
console.log(tabla1[0].shares); // 200


const item1 = { name: 'AmeriGas', shares: 200 };
const item2 = { name: 'Duke Energy', shares: 150 };
const tabla2 = [ item1, item2 ];

console.log( tabla2[1].shares ); // 150
```
