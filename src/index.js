import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AppStateProvider} from './contexts/AppStateContext';
import {GlobalStyleComponent} from "./styles/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyleComponent />
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
