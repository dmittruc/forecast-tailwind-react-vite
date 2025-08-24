import { IForecastDay } from '../../interfaces/IForecast';
import ForecastListItem from '../ForecastListItem';

interface IProps {
  list: {
    dt: number;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      temp_kf: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    dt_txt: string;
  }[];
  loading: boolean;
  error: any;
}

const ForecastList = ({ list, loading, error }: IProps) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error:{error.message}</div>;
  }
  if (!error && !loading && list) {
    return (
      <div>
        {list.map((item) => (
          <ForecastListItem key={item.dt} item={item} />
        ))}
      </div>
    );
  }
};

export default ForecastList;
