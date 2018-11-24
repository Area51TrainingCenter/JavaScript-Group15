# Glosario 4


## Selector

Es el que usamos en nuestro CSS.

```css
header nav a { /* <-- Selector */
  color: blue;
}

header .menu__item { /* <-- Selector */
  color: blue;
}

.menu__item { /* <-- Selector */
  color: blue;
}
```


## Interface

Es un _esquema_ donde se especifica las propiedades que deben estar en un `Object`. No se declara en el código, por lo general solo es indicado en alguna documentación. Si usas `TypeScript` **sí** puedes declararlo como parte de tu código.

```js
/*
interface IPersona {
  nombre: String,
  email: String,
  edad: Number
}
*/

let empleado1 = {
  // IPersona
  nombre: 'Pedro Lopez',
  email: 'pedrolopez@empresa.com',
  edad: 23
};
```

Es posible usar más de una `interface` para la creación de un objeto.

```js
/*
interface IPersona {
  nombre: String,
  email: String,
  edad: Number
}

interface IUsuario {
  usuario: String,
  contrasena: String
}
*/

let empleado2 = {
  // IPersona
  nombre: 'Pedro Lopez',
  email: 'pedrolopez@empresa.com',
  edad: 23,

  // IUsuario
  usuario: 'plopez',
  contrasena: 'Pl4321$'
};
```


## Collection

Es un objeto que representa una lista de datos. Al igual que con un 'Array' es posible iterarlas.

Es usada por algunos tipos de dato como `HTMLCollection` y `NodeList` usando la siguiente interfaz.

```typescript
interface ICollection {
  length: Number,
  item(index: Number),
  namedItem(name: String)
}
```
```js
collection.length

element = collection.item(index)
element = collection[index]

element = collection.namedItem(name)
element = collection[name]
```

Tenemos 2 tipos:


#### Indexed collections

Ordenada por un índice. Esta forma es usada por `Array` y otros como`HTMLCollection`, `NodeList` entre otros.

```js
const nodesTotal = collection.length;
const element = collection[index];
```

> Referencia: [MDN Web docs: Indexed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections)


#### Keyed collections

Ordenada por un nombre clave. Esta forma es usada por `Object` y otros como`HTMLCollection`, `NodeList` entre otros.

```js
const nodesTotal = collection.length;
const element = collection[name];
```

> Referencia: [MDN Web docs: Keyed collections](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections)


## Node

Es una [Interface](./glosario-4.md#Interface) usada por varios objetos del DOM como `Document`, `Element`, `DocumentFragment`, `DocumentType` entre otros. Esto les permite tener similitud pues heredan los mismos métodos y propiedades lo cual ayuda a probarlos de la misma forma.

> Referencia: [MDN Web docs: Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)


## HTMLCollection

Es un Tipo de Dato que maneja una colección de nodos `Element`.


## NodeList (Tipo de Dato)

Es un Tipo de Dato que maneja una colección de nodos de cualquier tipo.


## HTMLCollection vs. NodeList

Cuando usamos `.getElementsByClassName` o `.getElementsByTagName` el tipo de datos retornado es **`HTMLCollection`** y cuando usamos `.querySelectorAll` el tipo de dato retornado es **`NodeList`**.

