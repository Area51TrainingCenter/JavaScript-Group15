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


// Promise
// - Paralelo
// - Secuencial
