import React from 'react';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import 'react-dropdown/style.css';
import "./suneditor.min.css"
import { hydrate, render } from 'react-dom';


// const rootElement = document.getElementById("kredicomtr");
// if (rootElement.hasChildNodes()) {
//   hydrate(<App />, rootElement);
// } else {
//   render(<App />, rootElement);
  // "postbuild": "react-snap"
// }




render(

  <App />
  ,
  document.getElementById('kredicomtr')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
