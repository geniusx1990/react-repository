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
