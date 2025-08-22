import { Route, Routes } from 'react-router';
import MainPage from '../../pages/MainPage';
import DetailsPage from '../../pages/DetailsPage';
import Header from '../Header';

const AppNavigation = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </div>
  );
};

export default AppNavigation;
