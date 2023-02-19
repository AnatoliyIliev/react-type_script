import React, { useEffect, useState, useReducer, useCallback } from 'react';
import initialPixabay from './initialPixabay.json';
import Searchbar from './Searchbar';
import PixabayAPI from './services/PixabayAPI';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';

import './ImageFinderHooks.css';

function countPage(prevState: number, nextState: number) {
  return prevState + nextState;
}

function ImageFinder() {
  const [searchQuery, setSearchQuery] = useState('');
  const [PixabayImage, setPixabayImage] = useState(initialPixabay);
  const [perPage] = useState(12);
  const [page, setPage] = useReducer(countPage, 1);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState({ largeImageURL: '', tags: '' });
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    setPixabayImage([]);
    fetchUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const fetchUpdate = useCallback(async () => {
    setStatus('pending');

    try {
      const image = await PixabayAPI(searchQuery, page, perPage);

      setPixabayImage(PixabayImage => [...PixabayImage, ...image.hits]);

      setPage(1);

      setStatus('resolved');
    } catch (error) {
      let message = '';

      if (error instanceof Error) {
        message = error.message;
      }
      setError(message);
      setStatus('rejected');
    }
  }, [page, perPage, searchQuery]);

  const submitForm = (searchQuery: string) => {
    setSearchQuery(searchQuery);
    setPage(1);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const changeLargeImage = (largeImageURL: string, tags: string) => {
    setLargeImage({ largeImageURL, tags });
    toggleModal();
  };

  return (
    <div className="App">
      <Searchbar onSubmit={submitForm} />
      {status === 'idle' && <div>Enter data to search</div>}

      {status === 'rejected' && error}

      {status === 'resolved' && (
        <>
          <ImageGallery
            PixabayImage={PixabayImage}
            changeLargeImage={changeLargeImage}
          />
          <Button onClick={fetchUpdate} />
        </>
      )}
      {status === 'pending' && <Loader />}
      {showModal && <Modal onClose={toggleModal} image={largeImage}></Modal>}
    </div>
  );
}

export default ImageFinder;
