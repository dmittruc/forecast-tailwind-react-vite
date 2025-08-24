interface IProps {
  item: {
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
  };
}

const ForecastListItem = ({ item }: IProps) => {
  return (
    <div>
      <p className="p-4">{item.main.temp}</p>
    </div>
  );
};

export default ForecastListItem;
