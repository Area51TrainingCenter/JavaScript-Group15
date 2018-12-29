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
  .then((mensaje) => {
    console.log('OK!', mensaje);
  })
  .catch(() => {
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
// .when
