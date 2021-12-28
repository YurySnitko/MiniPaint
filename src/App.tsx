import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HeaderContainer } from './components/Header/Header';
import { AppRoute } from './AppRoute';
import { observer } from 'mobx-react-lite';
import { useStore } from '.';
import { AppContent, LayoutStld, FooterStld } from './App.styles';

const App = observer(() => {
  const { settingsStore } = useStore();

  return (
    <LayoutStld themeStyle={settingsStore.themeStyle}>
      <HeaderContainer />
      <AppContent className="site-layout">
        <ToastContainer />
        <AppRoute />
      </AppContent>
      <FooterStld themeStyle={settingsStore.themeStyle}>
        MiniPaint ©2021
      </FooterStld>
    </LayoutStld>
  );
});

export default App;
