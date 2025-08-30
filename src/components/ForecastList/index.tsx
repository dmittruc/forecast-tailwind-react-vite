import { IForecastDay } from '../../interfaces/IForecast';

interface IProps {
  forecast: IForecastDay;
  loading: boolean;
  error: any;
}

const ForecastList = ({ forecast, loading, error }: IProps) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error:{error.message}</div>;
  }
  if (!error && !loading && forecast) {
    return (
      <div className=" bg-white shadow-lg rounded-2xl p-4 text-center">
        <h3 className="text-2xl font-bold text-gray-800">{forecast.name}</h3>

        <div className="text-4xl font-bold text-blue-600 mt-2">
          {forecast.main.temp}°C
        </div>

        {forecast.main.temp_max && forecast.main.temp_min && (
          <div className="flex flex-col items-start mt-3 text-gray-600">
            <span className="text-sm">Мин: {forecast.main?.temp_min}°C</span>
            <span className="text-sm">Макс: {forecast.main?.temp_max}°C</span>
          </div>
        )}

        <div className="flex mt-3 text-gray-700 capitalize">
          {forecast.weather[0].description}
        </div>
      </div>
    );
  }
};
export default ForecastList;
