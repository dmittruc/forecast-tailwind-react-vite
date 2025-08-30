import { useDispatch, useSelector } from 'react-redux';
import { TAppDispatch, TRootState } from '../store/store';
import { fetchForecastAsyncAction } from '../store/forecastThunks';
import { useCallback } from 'react';
import { IForecastDay } from '../interfaces/IForecast';

const useForecast = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const searchCity = useCallback((city: string) => {
    dispatch(fetchForecastAsyncAction(city));
  }, []);

  const forecast = useSelector<TRootState, IForecastDay | null>(
    (state: TRootState) => state.forecast.forecast,
  );

  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.forecast.loading,
  );

  const error = useSelector<TRootState, any>(
    (state: TRootState) => state.forecast.error,
  );

  return {
    searchCity,
    forecast,
    loading,
    error,
  };
};

export default useForecast;
