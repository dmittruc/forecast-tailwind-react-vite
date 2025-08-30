export const getBackgroundGradient = (weather: string) => {
  switch (weather.toLowerCase()) {
    case 'clear':
      return 'bg-gradient-to-r from-yellow-300 to-yellow-500';
    case 'clouds':
      return 'bg-gradient-to-r from-gray-200 to-gray-400';
    case 'rain':
      return 'bg-gradient-to-r from-blue-400 to-blue-600';
    case 'drizzle':
      return 'bg-gradient-to-r from-blue-200 to-blue-400';
    case 'thunderstorm':
      return 'bg-gradient-to-r from-purple-600 to-purple-800';
    case 'snow':
      return 'bg-gradient-to-r from-blue-100 to-blue-300';
    case 'mist':
    case 'fog':
      return 'bg-gradient-to-r from-gray-300 to-gray-400';
    case 'tornado':
      return 'bg-gradient-to-r from-purple-800 to-purple-900';
    default:
      return 'bg-gradient-to-r from-yellow-100 to-yellow-200';
  }
};
