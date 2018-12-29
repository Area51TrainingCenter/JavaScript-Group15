export class YAPEController {
  // formulario = null;
  // contactoSelectElement = null;
  // montoElement = null;
  // pagosElement = null;

  constructor() {
    console.log('YAPE::contructor');
  }

  init() {
    this.cache();
    this.listeners();
    this.loadContactos();
    this.loadPagos();
  };

  cache() {
    console.log('cache: this', this);

    this.formulario = document.querySelector('#js-form');
    this.contactoSelectElement = document.querySelector('#js-contacto');
    this.montoElement = document.querySelector('#js-monto');
    this.pagosElement = document.querySelector('#js-pagos');
  }

  listeners() {
    // formulario.addEventListener('submit', this.onSubmitFormulario);
    this.formulario.addEventListener('submit', this.onSubmitFormulario.bind(this));
  }

  loadContactos() {
    console.log('loadContactos: this', this);

    this._services = new YAPEServices();

    this._services.getContacts()
      .then(this.onLoadContactos.bind(this));

    // fetch('http://localhost:3000/yape-contactos')
    //   .then(response => response.json())
    //   // .then(json => console.log(json))
    //   .then(this.onLoadContactos.bind(this));
  }

  loadPagos() {
    console.log('loadPagos: this', this);

    fetch('http://localhost:3000/yape-pagos')
      .then(response => response.json())
      .then(this.onLoadPagos.bind(this));
  }

  hacerPago(data) {
    fetch(
      'http://localhost:3000/yape-pagos',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      }
    )
    .then(response => response.json() )
    .then(this.insertarPago.bind(this));
  }

  onSubmitFormulario(event) {
    event.preventDefault();

    // const options = this.contactoSelectElement.options;
    // const selectedIndex = this.contactoSelectElement.selectedIndex;
    const { options, selectedIndex } = this.contactoSelectElement;

    const data = {
      contactoId: Number(options[selectedIndex].value),
      monto: Number(this.montoElement.value)
    };

    this.hacerPago(data);
  };

  onLoadContactos(contactos) {
    console.log('onLoadContactos: this', this);
    this._contactos = contactos;

    contactos.forEach(contacto => {
      let optionElement = document.createElement('option');
      optionElement.value = contacto.id;
      optionElement.text = contacto.nombre;

      this.contactoSelectElement.appendChild(optionElement);
    });
  }

  onLoadPagos(pagos) {
    pagos.forEach(this.insertarPago.bind(this));
    // pagos.forEach(pago => this.insertarPago(pago) );
  }

  insertarPago(data) {
    let row = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');

    const contactosFiltered = this._contactos.filter(item => item.id === data.contactoId);
    const contacto = contactosFiltered[0];

    td1.textContent = data.contactoId;
    td2.textContent = (contacto && contacto.nombre) || 'NO NAME';
    td3.textContent = data.monto;

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    this.pagosElement.appendChild(row);
  }
}

export class YAPEServices {
  constructor() {
    console.log('YAPE::contructor');
  }

  getContacts() {
    console.log('YAPE::getContacts');

    return new Promise((resolve, reject) => {
      fetch('http://localhost:3000/yape-contactos')
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(json => resolve(json));
    });
  }
}
