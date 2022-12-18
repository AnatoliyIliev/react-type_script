import React, { Component } from 'react';
import Searchbar from './03-image-finder/Searchbar';
import ImageGallery from './03-image-finder/ImageGallery';

import { IProps } from './03-image-finder/types';

class ImageFinder extends Component<IProps> {
  state = {
    searchQuery: '',
  };

  submitForm = (searchQuery: string) => {
    this.setState({ searchQuery: searchQuery });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.submitForm} />
        <ImageGallery searchQuery={searchQuery} />
      </>
    );
  }
}

export default ImageFinder;
