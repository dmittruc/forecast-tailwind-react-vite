import { getForecastByCity } from '../api/forecastApi';
import {
  getForecast,
  getForecastError,
  getForecastSuccess,
} from './forecastSlise';
import { TAppDispatch } from './store';

export const fetchForecastAsyncAction =
  (city: string) => async (dispatch: TAppDispatch) => {
    try {
      dispatch(getForecast());
      const res = await getForecastByCity(city);
      dispatch(getForecastSuccess(res));
    } catch (e: any) {
      dispatch(getForecastError(e));
    }
  };
