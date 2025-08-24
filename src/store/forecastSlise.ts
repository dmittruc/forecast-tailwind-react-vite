import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IForecast } from '../interfaces/IForecast';

interface forecastState {
  forecast: IForecast | null;
  loading: boolean;
  error: string | null;
}

const initialState: forecastState = {
  loading: false,
  error: null,
  forecast: null,
};

export const forecastSlice = createSlice({
  name: 'forecast',
  initialState,
  reducers: {
    getForecast: (state) => {
      state.loading = true;
      state.error = null;
    },
    getForecastSuccess: (state, action: PayloadAction<IForecast>) => {
      state.loading = false;
      state.forecast = action.payload;
      state.error = null;
    },
    getForecastError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getForecast, getForecastSuccess, getForecastError } =
  forecastSlice.actions;

export default forecastSlice.reducer;
