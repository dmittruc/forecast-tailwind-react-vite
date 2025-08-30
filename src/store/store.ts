import { configureStore } from '@reduxjs/toolkit';
import { forecastSlice } from './forecastSliсe';

export const store = configureStore({
  reducer: {
    forecast: forecastSlice.reducer,
  },
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
