import axiosInstance from '.';

const API_KEY = import.meta.env.VITE_API_KEY;

export const getForecastByCity = async (city) => {
  const res = await axiosInstance.get(
    `/data/2.5/forecast?q=${city}&appid=${API_KEY}`,
  );
  return res.data;
};
