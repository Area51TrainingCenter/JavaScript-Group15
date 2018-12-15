console.log('Hola');


const container = document.querySelector('#container');
const btnTask = document.querySelector('#btn-task');

const onClickLink = event => {
  event.preventDefault();

  const enlace = event.currentTarget;
  const elementoItem = enlace.closest('.item');
  const padreDelElementoItem = elementoItem.parentNode;

  console.log({ enlace, elementoItem, padreDelElementoItem });

  padreDelElementoItem.removeChild(elementoItem);
};


const crearTarea = texto => {
  const item = document.createElement('div');
  item.classList.add('item');
  
  item.innerHTML = `
    <div>
      ${texto}
    </div>
    <div>
      <a href="#eliminar">Eliminar</a>
    </div>
  `;

  const link = item.querySelector('a');
  link.addEventListener('click', onClickLink);

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
