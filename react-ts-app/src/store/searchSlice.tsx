import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ISearchState } from '../store/interfaces';

const initialState: ISearchState = {
  searchRequest: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchRequest(state, action: PayloadAction<string>) {
      state.searchRequest = action.payload;
    },
  },
});

export const { setSearchRequest } = searchSlice.actions;
export default searchSlice.reducer;
