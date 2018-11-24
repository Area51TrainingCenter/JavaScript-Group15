# DOM: Document Object Model

Se refiere a una estructura de Objects y Arrays donde se tiene los elementos HTML (tags).

Simulación de una estructura DOM:

```js
const dom = {
  nombre: 'Juan',
  hijos: [
    {
      nombre: 'Pedro'
    },
    {
      nombre: 'Diana',
      hijos: [
        {
          nombre: 'Lucia'
        }
      ]
    }
  ]
};

// Cómo accedemos a cada uno de los elementos:

dom  // Object

dom.nombre  // String

dom.hijos  // Array

dom.hijos[0]  // Object

dom.hijos[1]  // Object

dom.hijos[1].nombre  // String

dom.hijos[1].hijos  // Array

dom.hijos[1].hijos[0]  // Object

dom.hijos[1].hijos[0].nombre  // String
```

Ahora veamos lo mismo pero en Inglés:

```js
const dom = {
  name: 'Juan',
  children: [
    {
      name: 'Pedro'
    },
    {
      name: 'Diana',
      children: [
        {
          name: 'Lucia'
        }
      ]
    }
  ]
};

// Cómo accedemos a cada uno de los elementos:

dom  // Object

dom.name  // String

dom.children  // Array

dom.children[0]  // Object

dom.children[1]  // Object

dom.children[1].name  // String

dom.children[1].children  // Array

dom.children[1].children[0]  // Object

dom.children[1].children[0].name  // String
```

Este último ejemplo es el que más se asemeja a una estructura DOM.

Ahora veamos algunas funciones que nos ayudarán a llegar directamente a los elementos HTML:

```js
document.getElementById
document.getElementsByClassName
document.getElementsByTagName

document.querySelector
document.querySelectorAll
```

Usaremos el siguiente HTML para los ejemplos:

```html
<header id="cabecera">
  <nav class="menu nav-main">
    <a class="menu__item" href="#inicio">Inicio</a>
    <a class="menu__item" href="#nosotros">Nosotros</a>
    <a class="menu__item" href="#servicios">Servicios</a>
  </nav>
</header>

<article>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, cum.</p>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati saepe molestias, neque velit voluptates autem doloremque illo praesentium ab facere.</p>
</article>
```


### .getElementById

Retorna un elemento HTML que tenga el `ID` que indicamos:

```js
const cabecera = document.getElementById('cabecera');
console.log(cabecera);
// » <header id="cabecera">...</header>
```


### .getElementsByClassName

Retorna una lista de elementos HTML si contiene entre sus clases una `clase` que corresponda con la que indicamos:

```js
const menu = document.getElementsByClassName('menu');
console.log(menu);
// » HTMLCollection [nav.menu.nav-main]

const menuItems = document.getElementsByClassName('menu__item');
console.log(menuItems);
// » HTMLCollection(3) [a.menu__item, a.menu__item, a.menu__item]
```

### .getElementsByTagName

Retorna una lista de elementos HTML según el `Tag` que indicamos:

```js
const parrafos = document.getElementsByTagName('p');
console.log(parrafos);
// » HTMLCollection(2) [p, p]
```

---

Ahora veremos otras funciones que encuentran los elementos HTML por `selectores`.

### .querySelector

Retorna un elemento HTML según el `selector` que indicamos:

```js
const links1 = document.querySelector('header nav a');
console.log(links1);
// <a class="menu__item" href="#inicio">Inicio</a>

const links2 = document.querySelector('.menu__item');
console.log(links2);
// <a class="menu__item" href="#inicio">Inicio</a>
```

### .querySelectorAll

Retorna una lista de elementos HTML según el `selector` que indicamos:

```js
const links3 = document.querySelectorAll('header nav a');
console.log(links3);
// » NodeList(3) [a.menu__item, a.menu__item, a.menu__item]

const links4 = document.querySelectorAll('.menu__item');
console.log(links4);
// » NodeList(3) [a.menu__item, a.menu__item, a.menu__item]
```
