import { useEffect, useState } from 'react';
import { addRecentCity, getRecentCity } from '../../utils/recentCities';
import ForecastCard from '@components/ForecastCard';
import useForecast from '@/hooks/useForecast';
import SearchCity from '@components/SearchCity';
import CustomButton from '@components/CustonButton';
import { useDispatch } from 'react-redux';
import { TAppDispatch } from '@/store/store';
import { setForecastFromCache } from '@/store/forecastSliсe';

const MainPage = () => {
  const [city, setCity] = useState<string>('');
  const dispatch = useDispatch<TAppDispatch>();

  const { searchCity, forecast, loading, error } = useForecast();

  useEffect(() => {}, [forecast]);

  const handleSearch = (city: string) => {
    if (!city.trim()) return;
    const cached = getRecentCity(city);
    if (cached) {
      dispatch(setForecastFromCache(cached));
      return;
    }
    searchCity(city);
  };

  useEffect(() => {
    if (forecast) {
      addRecentCity(city, forecast);
    }
  }, [forecast]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center">
        <SearchCity city={city} onChange={setCity} />
        <CustomButton
          onClick={() => handleSearch(city)}
          loading={loading}
          className="bg-white p-3 mt-4 ml-3 rounded-3xl"
        >
          <img src="src/assets/arrow_right_circle_icon_136934.svg" alt="find" />
        </CustomButton>
      </div>

      {forecast && (
        <ForecastCard forecast={forecast} loading={loading} error={error} />
      )}
    </div>
  );
};

export default MainPage;
