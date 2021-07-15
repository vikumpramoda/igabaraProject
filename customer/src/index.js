import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import NavBar from './components/NavBar/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './index.scss';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <NavBar/>
    <App />
  </BrowserRouter>, 
  document.getElementById('root')
);

serviceWorker.unregister();

