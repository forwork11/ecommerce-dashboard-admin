import './App.less';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './AppRoute';
import AppProvider from './providers/AppProvider';
import { Provider } from 'react-redux';
import Store from './utils/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <AppProvider>
          <AppRoute />
        </AppProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
