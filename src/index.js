import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import logo512 from './asset/logo512.png';

// import { Welcome, Greeting, PI } from './component/Welcome';
// import Component from './component/Welcome';
import Component, { Welcome, Greeting, PI } from './component/Welcome';

function App1() {
  return (
    <div>
      <Welcome />
      <Greeting />
      <Component />
      {PI}
      <img src={logo512} />
      <img src="https://picsum.photos/200/300" />
    </div>
  );
}

console.log(PI);

ReactDOM.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
