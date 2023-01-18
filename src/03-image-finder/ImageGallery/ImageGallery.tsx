import ImageGalleryItem from '../ImageGalleryItem';
import '../ImageFinder.css';

import { IPropsGallery } from '../types';

function ImageGallery({ PixabayImage }: IPropsGallery) {
  return (
    <>
      <ul className="ImageGallery">
        <ImageGalleryItem PixabayImage={PixabayImage} />
      </ul>
    </>
  );
}

export default ImageGallery;
