import React, { Component } from 'react';
// import './03-image-finder/ImageFinder.css';
import Searchbar from './03-image-finder/Searchbar';
import PixabayAPI from './03-image-finder/services/PixabayAPI';

class ImageFinder extends Component {
  findURL() {
    try {
      PixabayAPI('cat').then(data => console.log(data));
    } catch (error) {
      throw new Error('Error');
    }
  }

  render() {
    return (
      <>
        <Searchbar />
      </>
    );
  }
}

export default ImageFinder;
