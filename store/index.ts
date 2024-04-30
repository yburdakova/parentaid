import { configureStore } from '@reduxjs/toolkit';
import childrenReducer from './slices/childrenSlice';

const store = configureStore({
  reducer: {
    children: childrenReducer,
  },
});

export default store;
