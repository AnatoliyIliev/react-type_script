import React, { Component } from 'react';
import Searchbar from './03-image-finder/Searchbar';
import PixabayAPI from './03-image-finder/services/PixabayAPI';
import ImageGallery from './03-image-finder/ImageGallery';
import Button from './03-image-finder/Button';
import Loader from './03-image-finder/Loader';
import Modal from './03-image-finder/Modal';

import './03-image-finder/ImageFinder.css';

import { IProps, IQuery, IState } from './03-image-finder/types';

class ImageFinder extends Component<IProps, IState> {
  state = {
    searchQuery: '',
    PixabayImage: [],
    perPage: 12,
    page: 1,
    error: '',
    loader: false,
    showModal: false,
    largeImage: { largeImageURL: '', tags: '' },
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
    this.setState({ loader: true });

    try {
      const image = await PixabayAPI(searchQuery, page, perPage);

      this.setState(prevState => ({
        PixabayImage: [...prevState.PixabayImage, ...image.hits],
        page: prevState.page + 1,
      }));
    } catch (error) {
      let message = '';

      if (error instanceof Error) {
        message = error.message;
      }

      this.setState({ error: message });
    } finally {
      this.setState({ loader: false });
    }
  };

  submitForm = (searchQuery: string) => {
    this.setState({ searchQuery, page: 1 });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  changeLargeImage = (largeImageURL: string, tags: string) => {
    this.setState({ largeImage: { largeImageURL, tags } });
    this.toggleModal();
  };

  render() {
    const { PixabayImage, perPage, loader, showModal, largeImage } = this.state;
    const LoadMoreButton = !(PixabayImage.length < perPage);

    return (
      <div className="App">
        {showModal && (
          <Modal onClose={this.toggleModal} image={largeImage}></Modal>
        )}
        <Searchbar onSubmit={this.submitForm} />
        {LoadMoreButton && (
          <ImageGallery
            PixabayImage={PixabayImage}
            changeLargeImage={this.changeLargeImage}
          />
        )}
        {loader && <Loader />}
        {LoadMoreButton && <Button onClick={this.fetchUpdate} />}
      </div>
    );
  }
}

export default ImageFinder;
