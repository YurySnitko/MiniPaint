import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    backgrndDark: '#3d4d66',
    backgrndLight: '#f0f2f5',
    fontDark: 'black',
    fontLight: '#eee',
    btnLink: '#40f5ff',
    primary: '#1890ff',
    blueDark: '#001529',
    grey: '#ccc',
  },
};

const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
