// import { init } from './index-axios';
// import { init } from './index-api';
// import { init } from './index-fetch';
import { YAPEController } from './index-class';

const app = new YAPEController(document.body);

document.addEventListener('DOMContentLoaded', app.init.bind(app));
