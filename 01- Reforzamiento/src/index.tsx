import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './index.css'; ("Este archivo no se ocupa, se puede borrar")
// import reportWebVitals from './reportWebVitals'; ("Este archivo no se necesita, se puede borrar")

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Esto de aqui abajo se puede borrar
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
