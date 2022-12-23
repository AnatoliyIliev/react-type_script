import React, { Component } from 'react';
import PixabayAPI from '../services/PixabayAPI';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';
import '../ImageFinder.css';

import { IPropsQuery, IState } from '../types';

class ImageGallery extends Component<IPropsQuery, IState> {
  state = {
    page: 1,
    PixabayImage: [],
  };

  componentDidUpdate(prevProps: IPropsQuery) {
    const prevQuery = prevProps.searchQuery;
    const nexQuery = this.props.searchQuery;

    if (prevQuery !== nexQuery) {
      this.setState({
        PixabayImage: [],
        page: 1,
      });

      this.fetchUpdate();
    }
  }

  fetchUpdate = async () => {
    const nexQuery = this.props.searchQuery;
    const { page } = this.state;

    try {
      const image = await PixabayAPI(nexQuery, page);
      let resetPage = page;

      this.setState(prevState => {
        if (prevState.page < page) {
          resetPage = 1;
        }
        return {
          PixabayImage: [...prevState.PixabayImage, ...image.hits],
          page: prevState.page + 1,
        };
      });
    } catch (error) {
      // this.setState({ error });
    }
  };

  render() {
    const { PixabayImage } = this.state;

    return (
      <>
        <ul className="ImageGallery">
          <ImageGalleryItem PixabayImage={PixabayImage} />
        </ul>
        <Button onClick={this.fetchUpdate} />
      </>
    );
  }
}

export default ImageGallery;
