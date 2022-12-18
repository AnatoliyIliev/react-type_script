import '../ImageFinder.css';
import { IGallery } from '../types';

const ImageGalleryItem = ({ PixabayImage }: IGallery) => {
  return <></>;
  // return PixabayImage.map(item => (
  //   <li className="ImageGalleryItem" key={item.id} id={item.id.toString()}>
  //     <img
  //       className="ImageGalleryItem-image"
  //       src={item.webformatURL}
  //       alt={item.tags}
  //     />
  //   </li>
  // ));
};

export default ImageGalleryItem;
