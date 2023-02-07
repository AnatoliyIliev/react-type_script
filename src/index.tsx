import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Phonebook from './02-phonebook/Phonebook';
import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <Phonebook />
  </React.StrictMode>,
  document.getElementById('root'),
);
