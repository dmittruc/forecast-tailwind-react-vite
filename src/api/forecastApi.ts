import axiosInstance from '.';

const API_KEY = process.env.REACT_APP_API_KEY;

export const getForecastByCity = async (city) => {
  const res = await axiosInstance.get(
    `/data/2.5/forecast?q=${city}&appid=${API_KEY}`,
  );
  console.log(res);
  return res.data;
};
