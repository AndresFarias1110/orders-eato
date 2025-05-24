import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { store } from './store/store';
import './App.css';
import AppRoutes from './routes/AppRoutes';

function App() {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  )
}

export default App;
