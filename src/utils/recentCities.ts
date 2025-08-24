export const getRecentCities = (): string[] => {
  return JSON.parse(localStorage.getItem('recentCities') || '[]');
};

export const addRecentCity = (city: string) => {
  const cities = getRecentCities();
  const updatedCities = [city, ...cities.filter((c) => c !== city)].slice(0, 2);
  localStorage.setItem('recentCities', JSON.stringify(updatedCities));
};
