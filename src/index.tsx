import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles.styles';
import 'antd/dist/antd.css';
import Theme from './Theme';
import stores from 'store/Stores/stores';
import { StoreType } from 'store/Stores/stores.interfaces';

const StoreContext = React.createContext<StoreType>(stores);

export const useStore = (): StoreType => React.useContext(StoreContext);

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
