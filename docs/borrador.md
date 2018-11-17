```js
const nombres = [
  ' Luis ',
  'Pablo  ',
  '  German',
  'Diego'
];

// .trim

// Individualmente
nombres[0].trim() // "Luis"

// En grupo
nombres.map(nombre => nombre.trim());
// ['Luis', 'Pablo', 'German', 'Diego'];

// 'LuisPabloGermanDiego';
nombres.reduce((a, b) => `${a}${b}`); // Recomendada
nombres.reduce((a, b) => a.concat(b));


const familia = 'Chavez';
// concatenar
// .concat 
// `${}` (recomendado)
// + (no recomendable)

// nombres.map(nombre => nombre.trim());

function limpiarLista(lista) {
  return lista.map(item => item.trim());  
}
limpiarLista(nombres)

function limpiarTexto(texto) {
  return texto.trim();
}
nombres.map(limpiarTexto);


function agregarAFamilia(nombre) {
  return `${nombre} ${familia}`;
}

nombres
  .map(limpiarTexto)
  // .map(nombre => `${nombre} ${familia}`)
  .map(agregarAFamilia)


nombres.map(limpiarTexto).map(agregarAFamilia);
```
