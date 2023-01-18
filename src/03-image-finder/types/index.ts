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
}

export interface IProps {
  onSubmit?: (searchQuery: string) => void;
  searchQuery?: string;
  onClick?: () => void;
  PixabayImage?: [] | IPixabay[];
}

export interface IState {
  searchQuery: string;
  PixabayImage: [] | IPixabay[];
  perPage: number;
  page: number;
}

export interface IPropsSearch {
  onSubmit: (searchQuery: string) => void;
}
