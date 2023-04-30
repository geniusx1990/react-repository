import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormState } from './interfaces';
import { IProduct } from '../types/interfaces';

const initialState: IFormState = {
  productList: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setProductList(state, action: PayloadAction<IProduct>) {
      state.productList.push(action.payload);
    },
  },
});

export const { setProductList } = formSlice.actions;
export default formSlice.reducer;
