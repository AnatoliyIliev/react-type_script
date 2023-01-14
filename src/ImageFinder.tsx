import React, { Component } from 'react';
import Searchbar from './03-image-finder/Searchbar';
import ImageGallery from './03-image-finder/ImageGallery';

import './03-image-finder/ImageFinder.css';

import { IProps } from './03-image-finder/types';

class ImageFinder extends Component<IProps> {
  state = {
    searchQuery: '',
  };

  submitForm = (searchQuery: string) => {
    this.setState({ searchQuery });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.submitForm} />
        <ImageGallery searchQuery={searchQuery} />
      </div>
    );
  }
}

export default ImageFinder;
