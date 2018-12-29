const url = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(url)
  .then(response => response.json())
  .then(json => console.log(json));



const mensajePromesa = () => {
  // return new Promise((resolve, reject) => {});
  return new Promise((resolve, reject) => {
    // resolve();

    setTimeout(() => {
      resolve('Area51');
      // reject();
    }, 3000);
  });
};

mensajePromesa()
  .then((mensaje) => { // resolve
    console.log('OK!', mensaje);
  })
  .catch(() => { // reject
    console.log('ERROR!');
  });


setTimeout(() => {
  console.log('HOLA!');
}, 3000);



// promise: lo que retornas
// reject: la respuesta ERROR
// resolve: la respuesta OK

// .then
// .catch


const sumar = (a, b) => {
  return a + b;
};

const promesaSumar = (a, b) => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      resolve(a + b);

    }, 3000);

  });
};

promesaSumar(3, 5)
  .then((resultado) => {
    console.log('SUMA', resultado);
  });

// diaSemana(0)   // Domingo
// diaSemana(1)   // Lunes
// diaSemana(2)   // Martes



const diaSemana = indice => {
  // const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const dias = 'Domingo,Lunes,Martes,Miércoles,Jueves,Viernes,Sábado'.split(',');

  return dias[indice];
};

const diaSemanaPromesa = indice => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const dias = 'Domingo,Lunes,Martes,Miércoles,Jueves,Viernes,Sábado'.split(',');

      resolve(dias[indice]);
    }, 3000);

  });
};

console.log(diaSemana(3));
diaSemanaPromesa(3).then(dia => console.log(dia));



const sistemaIntermitente = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tieneFalla = ((new Date()).getSeconds() % 2 == 0);

      if (tieneFalla) {
        reject(0);
      } else {
        resolve(1);
      }
    }, 3000)
  });
}
// DEMO 1
sistemaIntermitente()
  .then(() => {
    console.log('SIN ERRORES');
  })
  .catch(() => {
    console.log('CON ERRORES');
  });


// DEMO 2
sistemaIntermitente()
  .then((response) => {
    console.log('SIN ERRORES', response);

    return 5; // Pasamos este dato al siguiente THEN en su parametro "response"
    // Esto mismo usabamos en la primeras líneas con FETCH
  })
  .then((response) => {
    console.log('SIN ERRORES', response);
  })
  .catch((error) => {
    console.log('CON ERRORES', error);
  });


// DEMO 3
Promise.all([
  sistemaIntermitente(),
  sistemaIntermitente(),
  sistemaIntermitente()
])
  // .then(function () {
  //   console.log('arguments', arguments)
  // })
  .then(response => console.log('OK arguments', response[0], response[1], response[2]))
  .catch(err => console.log('ERROR arguments', err));
