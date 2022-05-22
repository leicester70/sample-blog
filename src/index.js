import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//  'Rotue' for 'Routes'
import CreateEntry from './components/createEntry/CreateEntry';

import reportWebVitals from './reportWebVitals';

// Router
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/CreateEntry" element={<CreateEntry />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// Not used in this tutorial
// reportWebVitals();
