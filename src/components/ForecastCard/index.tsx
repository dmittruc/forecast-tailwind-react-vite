import { getBackgroundGradient } from '@/utils/colorPicker';
import { IForecastDay } from '../../interfaces/IForecast';

interface IProps {
  forecast: IForecastDay;
  loading: boolean;
  error: any;
}

const ForecastCard = ({ forecast, loading, error }: IProps) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!forecast) return null;

  const mainWeather = forecast.weather[0].main;

  return (
    <div
      className={`${getBackgroundGradient(
        mainWeather,
      )} shadow-lg rounded-2xl p-4 mt-4 mx-5 text-center`}
    >
      <h3 className="text-2xl font-bold text-gray-800">{forecast.name}</h3>

      <div className="text-4xl font-bold text-blue-600 mt-2">
        {forecast.main.temp}°C
      </div>
      <div className="flex justify-between">
        {forecast.main.temp_max && forecast.main.temp_min && (
          <div className="flex flex-col items-start mt-3 text-gray-600">
            <span className="text-sm">Min: {forecast.main.temp_min}°C</span>
            <span className="text-sm">Max: {forecast.main.temp_max}°C</span>
          </div>
        )}

        <div className="flex mt-3 text-gray-700 capitalize">
          {forecast.weather[0].description}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex mt-3 text-gray-700 capitalize">
          Wind speed: {forecast.wind.speed} m/s
        </div>
        <div className="flex mt-3 text-gray-700 capitalize">
          Humidity: {forecast.main.humidity}%
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
