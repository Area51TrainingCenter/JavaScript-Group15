console.log('Hola');


const container = document.querySelector('#container');
const btnTask = document.querySelector('#btn-task');


const crearTarea = texto => {
  const item = document.createElement('div');
  item.classList.add('item');
  
  item.innerHTML = `
    <div>
      ${texto}
    </div>
    <div>
      <a class="btn-eliminar" href="#eliminar">Eliminar</a>
    </div>
  `;

  container.appendChild(item);
};

const onClickBtnTask = event => {
  event.preventDefault();

  // const txtTask = document.querySelector('#txt-task');

  const btn = event.currentTarget;
  const padre = btn.parentNode;
  const txtTask = padre.querySelector('.input-task');

  crearTarea(txtTask.value);

  txtTask.value = '';
  txtTask.focus();

};

btnTask.addEventListener('click', onClickBtnTask);



const onKeypressTxtTask = event => {
  const ENTER_KEYCODE = 13;
  
  if (event.keyCode === ENTER_KEYCODE) {
    // OPTION 1
    // const txtTask = event.currentTarget;

    // crearTarea(txtTask.value);

    // txtTask.value = '';
    // txtTask.focus();


    // OPTION 2
    const txtTask = event.currentTarget;
    const padre = txtTask.parentNode;
    const btn = padre.querySelector('#btn-task');

    // btn.click();
    // o
    btn.dispatchEvent( new Event('click') );
  }
};

const txtTask = document.querySelector('#txt-task');
txtTask.addEventListener('keypress', onKeypressTxtTask);


container.addEventListener('click', event => {
  console.log('CLICK!');
  
  const elementoAQuienSeAsignoElEvento = event.currentTarget;
  const elementoCliqueado = event.target;

  console.log('- event.currentTarget (elementoAQuienSeAsignoElEvento)');
  console.log(elementoAQuienSeAsignoElEvento);
  
  console.log('- event.target (elementoCliqueado)');
  console.log(elementoCliqueado);

  
  
  if (elementoCliqueado.classList.contains('btn-eliminar')) {
    const elementoItem = elementoCliqueado.closest('.item');
    const padreDelElementoItem = elementoItem.parentNode;
    padreDelElementoItem.removeChild(elementoItem);
  }

});


