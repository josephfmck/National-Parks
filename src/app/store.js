import { configureStore } from '@reduxjs/toolkit';
//just calling it authReducer, represents the slice of state
import reducer from '../features/slice';

//access to auth state
export const store = configureStore({
  reducer: {
    slice: reducer,
  },
});
