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
    perPage: 12,
  };

  // resetPage = () => {
  //   this.setState({ page: 1 });
  // };

  componentDidUpdate(prevProps: IPropsQuery) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;

    if (prevQuery !== nextQuery) {
      this.setState({
        PixabayImage: [],
      });

      this.fetchUpdate();
    }
  }

  fetchUpdate = async () => {
    const nextQuery = this.props.searchQuery;
    const { page, perPage } = this.state;

    try {
      const image = await PixabayAPI(nextQuery, page, perPage);

      this.setState(prevState => ({
        PixabayImage: [...prevState.PixabayImage, ...image.hits],
        page: prevState.page + 1,
      }));
    } catch (error) {
      // this.setState({ error });
    }
  };

  render() {
    const { PixabayImage, perPage } = this.state;
    const LoadMoreButton = !(PixabayImage.length < perPage);

    return (
      <>
        <ul className="ImageGallery">
          <ImageGalleryItem PixabayImage={PixabayImage} />
        </ul>
        {LoadMoreButton && <Button onClick={this.fetchUpdate} />}
      </>
    );
  }
}

export default ImageGallery;
