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

export interface IProps {}

export interface IState {
  name: string;
  date: Date;
}

export interface ICardForm {
  title: string;
  date: string;
  price: boolean;
  discount: boolean;
  brand: string;
  category: string; //laptop or mobile phone
  thumbnail: string;
}

export interface IProductForm extends ICardForm {
  id: number;
}
