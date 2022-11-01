import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Approute from './Approute';
import Home from './home';
import './index.css';
import Product from './product';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Route from './route';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter> 
    <Approute></Approute>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
