import axiosInstance from '.';

const API_KEY = import.meta.env.VITE_API_KEY;

export const getForecastByCity = async (city: string) => {
  const res = await axiosInstance.get(
    `/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=ru`,
  );
  console.log(res);
  return res.data;
};
