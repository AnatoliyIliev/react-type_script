import React, { Component } from 'react';
import Searchbar from './03-image-finder/Searchbar';
import PixabayAPI from './03-image-finder/services/PixabayAPI';
import ImageGallery from './03-image-finder/ImageGallery';
import Button from './03-image-finder/Button';

import './03-image-finder/ImageFinder.css';

import { IProps, IQuery, IState } from './03-image-finder/types';

class ImageFinder extends Component<IProps, IState> {
  state = {
    searchQuery: '',
    PixabayImage: [],
    perPage: 12,
    page: 1,
  };

  submitForm = (searchQuery: string) => {
    this.setState({ searchQuery, page: 1 });
  };

  componentDidUpdate(prevProps: IQuery, prevState: IQuery) {
    const { searchQuery } = this.state;
    const prevQuery = prevState.searchQuery;

    if (prevQuery !== searchQuery) {
      this.setState({
        PixabayImage: [],
      });

      this.fetchUpdate();
    }
  }

  fetchUpdate = async () => {
    const { searchQuery, page, perPage } = this.state;

    try {
      const image = await PixabayAPI(searchQuery, page, perPage);

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
      <div className="App">
        <Searchbar onSubmit={this.submitForm} />
        {LoadMoreButton && <ImageGallery PixabayImage={PixabayImage} />}
        {LoadMoreButton && <Button onClick={this.fetchUpdate} />}
      </div>
    );
  }
}

export default ImageFinder;
