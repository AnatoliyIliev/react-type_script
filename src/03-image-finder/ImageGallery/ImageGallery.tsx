import React, { Component } from 'react';
import PixabayAPI from '../services/PixabayAPI';
import '../ImageFinder.css';
import ImageGalleryItem from '../ImageGalleryItem';
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
          console.log('data', data.hits);
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
      <ul className="ImageGallery">
        {PixabayImage && <ImageGalleryItem PixabayImage={PixabayImage} />}
      </ul>
    );
  }
}

export default ImageGallery;
