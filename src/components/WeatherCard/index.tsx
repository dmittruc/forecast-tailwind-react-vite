interface IProps {
  data: {
    id: number;
    city: string;
    temp: string;
    max: string;
    min: string;
    condition: string;
  };
  isActive: boolean;
}

const WeatherCard = ({ data, isActive }: IProps) => {
  return (
    <div
      style={{
        backgroundColor: isActive ? 'var(--hue-4)' : 'var(--layer)',
        transform: isActive ? 'scale(1)' : 'scale(0.9)',
        opacity: isActive ? 1 : 0.7,
      }}
    >
      <h3>{data.city}</h3>
      <div>{data.temp}</div>
      <div>от{data.min}</div>
      <div>до{data.max}</div>
      <div>{data.condition}</div>
    </div>
  );
};

export default WeatherCard;
