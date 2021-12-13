import styled from 'styled-components'
import { Content, Footer } from 'antd/lib/layout/layout';
import { ThemeType } from './store/SettingsStore';
import { Layout } from 'antd';

export const AppContent = styled(Content)`
    padding: 10px 20px;
    min-height: 380px;
`;

export const FooterStld = styled(Footer) <PropsType>`
    background-color: ${({ theme, themeStyle }) =>
        themeStyle === "light" ? theme.colors.backgrndLight : theme.colors.backgrndDark
    };
    color: ${({ theme, themeStyle }) =>
        themeStyle === "light" ? theme.colors.fontDark : theme.colors.fontLight
    };
    text-align: center;
`;

export const LayoutStld = styled(Layout) <PropsType>`
    background-color: ${({ theme, themeStyle }) =>
        themeStyle === "light" ? theme.colors.backgrndLight : theme.colors.backgrndDark
    };
`;

type PropsType = {
    themeStyle: ThemeType
}