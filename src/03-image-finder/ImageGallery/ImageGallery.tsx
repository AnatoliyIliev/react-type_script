import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import '../ImageFinder.css';

import { IPropsGallery } from '../types';

class ImageGallery extends Component<IPropsGallery> {
  handleItemClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;

    this.props.PixabayImage.forEach(({ id, largeImageURL, tags }) => {
      if (id === Number(target.id)) {
        this.props.changeLargeImage!(largeImageURL, tags);
      }
    });
  };

  render() {
    return (
      <>
        <ul className="ImageGallery" onClick={this.handleItemClick}>
          <ImageGalleryItem PixabayImage={this.props.PixabayImage} />
        </ul>
      </>
    );
  }
}

export default ImageGallery;
