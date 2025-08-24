/** @format */
import AppNavigation from './components/AppNavigation';
import { BrowserRouter } from 'react-router';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppNavigation />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
