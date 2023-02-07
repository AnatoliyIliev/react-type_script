import React from 'react';
import ReactDOM from 'react-dom';
// import Components from './01-components/Components';
// import Feedback from './02-feedback/Feedback';
// import Phonebook from './02-phonebook/Phonebook';
// import ImageFinder from './03-image-finder/ImageFinder';
import Phonebook03 from './03-phonebook/Phonebook03';
import './index.css';
import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <Components /> */}
    {/* <Feedback /> */}
    {/* <Phonebook /> */}
    {/* <ImageFinder /> */}
    <Phonebook03 />
  </React.StrictMode>,
  document.getElementById('root'),
);
