import { BrowserRouter } from 'react-router-dom';
import AppRoute from './AppRoute';
import { Provider } from 'react-redux';
import Store from './utils/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <AppRoute />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
