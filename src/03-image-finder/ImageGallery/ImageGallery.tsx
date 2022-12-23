import React, { Component } from 'react';
import PixabayAPI from '../services/PixabayAPI';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';
import '../ImageFinder.css';

import { IQuery } from '../types';

class ImageGallery extends Component<IQuery> {
  state = {
    page: 1,
    PixabayImage: [],
    error: null,
  };

  componentDidUpdate(prevProps: IQuery) {
    const prevQuery = prevProps.searchQuery;
    const nexQuery = this.props.searchQuery;

    if (prevQuery !== nexQuery) {
      const { page } = this.state;
      try {
        PixabayAPI(nexQuery, page).then(data => {
          this.setState({ PixabayImage: data.hits });
        });
      } catch (error) {
        this.setState({ error });
      }
    }
  }

  render() {
    const { PixabayImage } = this.state;

    return (
      <>
        <ul className="ImageGallery">
          <ImageGalleryItem PixabayImage={PixabayImage} />
        </ul>
        <Button />
      </>
    );
  }
}

export default ImageGallery;
