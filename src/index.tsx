import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Components from './Components';
import Feedback from './Feedback';
import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <Components />
    <Feedback />
  </React.StrictMode>,
  document.getElementById('root'),
);
