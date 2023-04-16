export interface ICard {
  title: string;
  date: string;
  discount: boolean;
  brand: string;
  category: string; //laptop or mobile phone
  thumbnail: string;
}

export interface IProduct extends ICard {
  id: number;
}

export interface ISearchState {
  searchValue: string;
}

export interface IProps {
  setProductList: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export interface IState {
  id: number;
  message: boolean;
  errorTitle: boolean;
  errorBrand: boolean;
  errorDate: boolean;
  errorThumbnail: boolean;
  errorDiscount: boolean;
  errorType: boolean;
  errorConfirm: boolean;
}

export interface IProductList {
  productList: IProduct[];
}

export enum API {
  URL = 'https://api.unsplash.com/',
  RANDOM = 'photos/random?count=10',
  ACCESS_KEY = '&client_id=lhEsO7r9Xbt-qPleFFpbPmrFvyoF2sIGVESl4vriSog',
  Search = 'search/photos?query=',
  ByID = 'photos/',
}

interface IUrls {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
}

interface ILinks {
  download: string;
  download_location: string;
  html: string;
  self: string;
}

interface IUser {
  id: string;
  updated_at: string;
  username: string;
  name: string;
}

export interface ICardItem {
  id: string;
  urls: IUrls;
  description: string;
  alt_description: string;
  created_at: string;
  updated_at: string;
  likes: number;
  user: IUser;
  tags: ITags[];
  links: ILinks;
}

interface ITags {
  type: string;
  title: string;
}

export interface ICardList {
  itemList: ICardItem[];
}

export interface ICardItemProps {
  card: ICardItem;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCardActive: React.Dispatch<React.SetStateAction<string>>;
}

export interface ISearchBar {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export interface IModal {
  cardActive: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
