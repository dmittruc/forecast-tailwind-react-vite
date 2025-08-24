export interface IForecast {
  cod: string;
  message: number;
  cnt: number;
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
  city?: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export interface IForecastDay {
  temp: number;
  tempMin: number;
  tempMax: number;
  description: string;
  city?: string;
}
