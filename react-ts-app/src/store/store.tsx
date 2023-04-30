import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../store/counterSlice';
import searchReducer from './searchSlice';
import formReducer from './formSlice';
import { pokemonApi } from './apiSlice';

export const store = configureStore({
  reducer: {
    searchReducer,
    formReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
