import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles.styles';
import stores from './store/stores';
import 'antd/dist/antd.css';
import Theme from './Theme';

const StoreContext = React.createContext(stores);

export const useStore = () => React.useContext(StoreContext);

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={stores}>
      <BrowserRouter>
        <GlobalStyles />
        <Theme>
          <App />
        </Theme>
      </BrowserRouter>
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
