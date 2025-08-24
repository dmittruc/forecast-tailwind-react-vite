import { useState } from 'react';
import { addRecentCity, getRecentCities } from '../../utils/recentCities';
import ForecastList from '@components/ForecastList';
import useForecast from '@/hooks/useForecast';
import SearchCity from '@components/SearchCity';
import CustomButton from '@components/CustonButton';

const MainPage = () => {
  const [city, setCity] = useState<string>('');
  const [recentCities, setRecentCities] = useState<string[]>(getRecentCities());

  const { searchCity, forecast, loading, error } = useForecast();

  const handleSearch = (newCity: string) => {
    if (!newCity) return;
    searchCity(newCity);
    addRecentCity(newCity);
    setRecentCities(getRecentCities());
  };

  return (
    <div>
      <SearchCity city={city} onChange={setCity} />
      <CustomButton
        name="Find"
        onClick={() => handleSearch(city)}
        loading={loading}
      />
      <div style={{ marginTop: 10 }}>
        {recentCities.map((c) => (
          <button
            key={c}
            onClick={() => handleSearch(c)}
            style={{ marginRight: 5 }}
          >
            {c}
          </button>
        ))}
      </div>
      <ForecastList list={forecast?.list} loading={loading} error={error} />
    </div>
  );
};

export default MainPage;
