import React from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { AppRoute } from './AppRoute';

const { Content, Footer } = Layout;

function App() {
  return <Layout>
    <HeaderContainer />
    <Content className="site-layout" style={{ padding: '0 10px', marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 10, minHeight: 380 }}>
        <ToastContainer />
        <AppRoute />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>MiniPaint ©2021</Footer>
  </Layout>
}

export default App;
