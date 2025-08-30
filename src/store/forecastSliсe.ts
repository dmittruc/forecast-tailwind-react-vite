import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IForecastDay } from '../interfaces/IForecast';
import { fetchForecastAsyncAction } from './forecastThunks';

interface forecastState {
  forecast: IForecastDay | null;
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
    setForecastFromCache: (state, action) => {
      state.forecast = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchForecastAsyncAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchForecastAsyncAction.fulfilled,
        (state, action: PayloadAction<IForecastDay>) => {
          state.loading = false;
          state.forecast = action.payload;
        },
      )
      .addCase(fetchForecastAsyncAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'error';
      });
  },
});

export const { setForecastFromCache } = forecastSlice.actions;
export default forecastSlice.reducer;
