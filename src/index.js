import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Background from './Components/background';
import Mobel from './Components/mobel';

ReactDOM.render(
  <React.StrictMode>
    <Background />
    <Mobel />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
