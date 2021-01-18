import React from 'react';
import ReactDOM from 'react-dom';
import DeliveryInfo from './Components/deliveryInfo';
import SaveDelivery from './Components/saveDelivery';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Background from './Components/background';
import Mobel from './Components/mobel';

ReactDOM.render(
  <React.StrictMode>
    <Background />
    {/* <DeliveryInfo /> */}
    {/* <SaveDelivery /> */}
    {/* <Mobel /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
