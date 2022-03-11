import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Create from './create/create';

import reportWebVitals from './reportWebVitals';
// Import Routing
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// Not used in this tutorial
// reportWebVitals();
