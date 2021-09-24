import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Title from './components/Title';
import Menu from './components/Menu';
import reportWebVitals from './reportWebVitals';
import Content from './components/Content';
import { BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Title />
      <Menu />
      <Content />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
