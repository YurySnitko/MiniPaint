import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles.styles';
import stores from './store/stores';

const StoreContext = React.createContext(stores);

export const useStore = () => React.useContext(StoreContext);

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={stores}>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
