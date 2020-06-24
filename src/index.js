import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import AppProvider from "./AppProvider";

ReactDOM.render(
  <BrowserRouter>
    <AppProvider >
      <App />
    </AppProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();
