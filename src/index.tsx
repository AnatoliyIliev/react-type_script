import React from 'react';
import ReactDOM from 'react-dom';
import Components from './01-components/Components';
import Feedback from './02-feedback/Feedback';
import Phonebook from './02-phonebook/Phonebook';
import ImageFinder from './03-image-finder/ImageFinder';
import './index.css';
import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <Components />
    <Feedback />
    <Phonebook />
    <ImageFinder />
  </React.StrictMode>,
  document.getElementById('root'),
);
