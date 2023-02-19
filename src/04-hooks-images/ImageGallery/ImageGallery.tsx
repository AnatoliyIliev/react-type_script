import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import '../ImageFinderHooks.css';

import { IPropsGallery } from '../types';

function ImageGallery({ PixabayImage, changeLargeImage }: IPropsGallery) {
  const handleItemClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;

    PixabayImage.forEach(({ id, largeImageURL, tags }) => {
      if (id === Number(target.id)) {
        changeLargeImage!(largeImageURL, tags);
      }
    });
  };

  return (
    <>
      <ul className="ImageGallery" onClick={handleItemClick}>
        <ImageGalleryItem PixabayImage={PixabayImage} />
      </ul>
    </>
  );
}

export default ImageGallery;
