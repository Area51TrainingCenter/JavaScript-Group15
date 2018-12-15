let panelHeaders;


// Usando clases CSS

const toggle1 = panel => {
  // OPTION 1
  // if (panel.classList.contains('is-closed')) {
  //   panel.classList.remove('is-closed');
  // } else {
  //   panel.classList.add('is-closed');
  // }

  // OPTION 2
  panel.classList.toggle('is-closed');
};


// Usando solo JS

const toggle2 = panel => {
  const panelBody = panel.querySelector('.panel__body');

  if (panelBody.style.display === 'none') {
    panelBody.style.display = 'block';
  } else {
    panelBody.style.display = 'none';
  }
};

// Usando solo JS + animado
const toggle3 = panel => {
  const panelBody = panel.querySelector('.panel__body');
  const rect = panelBody.getBoundingClientRect();
  
  if (panelBody.__alturaInicial === undefined) {
    panelBody.__alturaInicial = rect.height;
    panelBody.style.height = `${panelBody.__alturaInicial}px`;
  }

  setTimeout(() => {
    if (rect.height === 0) {
      panelBody.style.height = `${panelBody.__alturaInicial}px`;
    } else {
      panelBody.style.height = '0px';
    }
  }, 0);
};

const onClickPanelHeader = event => {
  const panelHeader = event.currentTarget;
  
  // OPCIÓN 1: .parentNode
  // const panel = panelHeader.parentNode;

  // OPCIÓN 2: .closest(  )
  const panel = panelHeader.closest('.panel');

  // toggle1(panel);
  // toggle2(panel);
  toggle3(panel);
};

const cache = () => {
  panelHeaders = [...document.querySelectorAll('.panel__header')];
  
};

const listeners = () => {
  panelHeaders.forEach(panelHeader => {
    panelHeader.addEventListener('click', onClickPanelHeader);
  });
};

const init = () => {
  cache();
  listeners();
};

document.addEventListener('DOMContentLoaded', init);