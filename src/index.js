import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyleComponent} from "./styles/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyleComponent />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
