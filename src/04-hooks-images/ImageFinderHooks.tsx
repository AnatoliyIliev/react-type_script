import React, { Component } from 'react';
import Searchbar from './Searchbar';
import PixabayAPI from './services/PixabayAPI';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';

import './ImageFinderHooks.css';

import { IProps, IQuery, IState } from './types';

class ImageFinder extends Component<IProps, IState> {
  state = {
    searchQuery: '',
    PixabayImage: [],
    perPage: 12,
    page: 1,
    error: '',
    showModal: false,
    largeImage: { largeImageURL: '', tags: '' },
    status: 'idle',
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
    this.setState({ status: 'pending' });

    try {
      const image = await PixabayAPI(searchQuery, page, perPage);

      this.setState(prevState => ({
        PixabayImage: [...prevState.PixabayImage, ...image.hits],
        page: prevState.page + 1,
        status: 'resolved',
      }));
    } catch (error) {
      let message = '';

      if (error instanceof Error) {
        message = error.message;
      }

      this.setState({ error: message, status: 'rejected' });
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
    const { PixabayImage, showModal, largeImage, status, error } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.submitForm} />
        {status === 'idle' && <div>Enter data to search</div>}

        {status === 'rejected' && error}

        {status === 'resolved' && (
          <>
            <ImageGallery
              PixabayImage={PixabayImage}
              changeLargeImage={this.changeLargeImage}
            />
            <Button onClick={this.fetchUpdate} />
          </>
        )}
        {status === 'pending' && <Loader />}
        {showModal && (
          <Modal onClose={this.toggleModal} image={largeImage}></Modal>
        )}
      </div>
    );
  }
}

export default ImageFinder;
