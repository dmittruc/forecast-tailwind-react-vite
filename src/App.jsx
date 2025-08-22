/** @format */
import AppNavigation from './components/AppNavigation';
import { BrowserRouter } from 'react-router';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AppNavigation />
    </BrowserRouter>
  );
}

export default App;
