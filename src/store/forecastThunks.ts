import { createAsyncThunk } from '@reduxjs/toolkit';
import { getForecastByCity } from '../api/forecastApi';

import { TAppDispatch } from './store';
import { IForecastDay } from '@/interfaces/IForecast';

export const fetchForecastAsyncAction = createAsyncThunk<IForecastDay, string>(
  'forecast/fetchForecastAsyncAction',

  async (city: string) => {
    const res = await getForecastByCity(city);
    return res as IForecastDay;
  },
);
