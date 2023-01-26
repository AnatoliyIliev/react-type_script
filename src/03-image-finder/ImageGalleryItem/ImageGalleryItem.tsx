import '../ImageFinder.css';
import { IPropsGallery } from '../types';

const ImageGalleryItem = ({ PixabayImage }: IPropsGallery) => {
  return (
    <>
      {PixabayImage.map(item => (
        <li className="ImageGalleryItem" key={item.id}>
          <img
            className="ImageGalleryItem-image"
            src={item.webformatURL}
            alt={item.tags}
            id={item.id.toString()}
          />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;
