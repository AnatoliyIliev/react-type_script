import '../ImageFinder.css';
import { IPropsGallery } from '../types';

const ImageGalleryItem = ({ PixabayImage }: IPropsGallery) => {
  return (
    <>
      {PixabayImage.map(item => (
        <li className="ImageGalleryItem" key={item.id} id={item.id.toString()}>
          <img
            className="ImageGalleryItem-image"
            src={item.webformatURL}
            alt={item.tags}
          />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;
