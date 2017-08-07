import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery'
import Tether from 'tether'
window.jQuery = $
window.Tether = Tether
/* import 'bootstrap/dist/js/bootstrap.js';*/
require('bootstrap');


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
