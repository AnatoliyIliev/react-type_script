export interface IPixabay {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  fullHDURL: string;
  imageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
}

export interface IQuery {
  searchQuery: string;
}

export interface IPropsGallery {
  PixabayImage: [] | IPixabay[];
  changeLargeImage?: (largeImageURL: string, tags: string) => void;
}

export type largeImage = {
  largeImageURL: string;
  tags: string;
};

export interface IProps {
  onSubmit?: (searchQuery: string) => void;
  searchQuery?: string;
  onClick?: () => void;
  PixabayImage?: [] | IPixabay[];
  changeLargeImage?: (largeImageURL: string, tags: string) => void;
}

export interface IState {
  searchQuery: string;
  PixabayImage: [] | IPixabay[];
  perPage: number;
  page: number;
  error: string;
  showModal: boolean;
  largeImage: largeImage;
  status: string;
}

export interface IPropsSearch {
  onSubmit: (searchQuery: string) => void;
}

export interface IPropsModal {
  onClose: () => void;
  image?: largeImage;
}
