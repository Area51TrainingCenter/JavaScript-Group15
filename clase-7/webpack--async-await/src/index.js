const sumarPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    resolve(a + b);
  });
};

// async function init() {
const init = async () => {
  console.log('Mensaje 1');
  let resultado;

  // sumarPromise(3, 5).then(resultado => console.log(resultado));
  // resultado = await sumarPromise(3, 5);

  try {
    resultado = await sumarPromise(3, 5);
    console.log(resultado);
  } catch(err) {
    console.log('ERROR', err);
  }

  console.log('Mensaje 2');
}

init();



/*
  await crearDirectorios();
  await generarRepositorio();
  await actualizarRamas();

  crearDirectorios()
    .then(() => {
      generarRepositorio()
        .then(() => {
          actualizarRamas()
        });
    });
*/


// Promise, tipos de tareas
// - Paralela
// - Secuencial o Serial




const intermitente = () => ((new Date()).getSeconds() % 2 === 0);

const validarSesion = () => new Promise((resolve, reject) => {
  if (intermitente()) {
    resolve();
  } else {
    reject();
  }
});

const login = (user, password) => new Promise((resolve, reject) => {
  if (user === 'alumno' && password === '123456') {
    resolve();
  } else {
    reject();
  }
});

const mostrarDatos = () => new Promise((resolve, reject) => {
  resolve();
});


// 1. validarSesion
// 2. login
// 3. mostrarDatos


