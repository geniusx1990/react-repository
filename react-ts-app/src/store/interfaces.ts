import { IProduct } from '../types/interfaces';

export interface ISearchState {
  searchRequest: string;
}

export interface IFormState {
  productList: IProduct[];
}
