import { configureStore } from '@reduxjs/toolkit';
import { personalDataSlice } from '../slices/personal-data-slice';

const store = configureStore({
  reducer: {
    personalData: personalDataSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
