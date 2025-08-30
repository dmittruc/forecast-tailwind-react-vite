import { useEffect, useState } from 'react';
import { addRecentCity, getRecentCities } from '../../utils/recentCities';
import ForecastList from '@components/ForecastList';
import useForecast from '@/hooks/useForecast';
import SearchCity from '@components/SearchCity';
import CustomButton from '@components/CustonButton';

const MainPage = () => {
  const [city, setCity] = useState<string>('');
  const [recentCities, setRecentCities] = useState<string[]>(getRecentCities());

  const { searchCity, forecast, loading, error } = useForecast();

  useEffect(() => {
    console.log(forecast);
  }, [forecast]);

  const handleSearch = (newCity: string) => {
    if (!newCity) return;
    searchCity(newCity);
    addRecentCity(newCity);
    setRecentCities(getRecentCities());
  };

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
        <ForecastList forecast={forecast} loading={loading} error={error} />
      )}
      <div>
        {recentCities.map((c) => (
          <CustomButton
            children={c}
            onClick={() => handleSearch(c)}
            className="text-xl m-4 bg-yellow-300 text-blue-600"
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
