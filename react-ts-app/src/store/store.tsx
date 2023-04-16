import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../store/counterSlice';
import searchReducer from './searchSlice';

export const store = configureStore({
  reducer: {
    searchReducer,
    counter: counterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
