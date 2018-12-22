import { sumar, multiplicar } from './libs/utils';
import { numeroALetras } from './libs/conversion';
import { api } from './libs/api';


const saludo = 'Hola mundo!';
console.log(`saludo: ${saludo}`);


let resultado

resultado = sumar(3, 5);
console.log(resultado);

resultado = multiplicar(3, 5);
console.log(resultado);



// ./lib/conversion.js
// Función "numeroALetras" con alcance de 0 a 10

console.log(numeroALetras(2));
// "Dos"

console.log(numeroALetras(10));
// "Diez"

console.log(numeroALetras(0));
// "Cero"
