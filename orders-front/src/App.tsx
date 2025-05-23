import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';

import { store } from './store/store';
import './App.css';
import AppRoutes from './routes/AppRoutes';

function App() {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  )
}

export default App;
