import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Background from './Components/background';
import Mobel from './Components/mobel';
import Container from '@material-ui/core/Container';

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Background />
      <Mobel />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
