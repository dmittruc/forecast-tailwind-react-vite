const TTL = 10 * 60 * 1000;

type WeatherData = {
  data: any;
  timestamp: number;
};

export const addRecentCity = (city: string, data: any) => {
  const cities = JSON.parse(localStorage.getItem('recentCities') || '{}');
  cities[city.toLowerCase()] = {
    data,
    timestamp: Date.now(),
  };
  localStorage.setItem('recentCities', JSON.stringify(cities));
};

export const getRecentCity = (city: string): any | null => {
  const cities = JSON.parse(localStorage.getItem('recentCities') || '{}');
  const item = cities[city.toLowerCase()] as WeatherData | undefined;
  if (item && Date.now() - item.timestamp < TTL) {
    return item.data;
  }
  return null;
};
