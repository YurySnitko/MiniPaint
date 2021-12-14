import styled from 'styled-components'
import { Content, Footer } from 'antd/lib/layout/layout';
import { Layout } from 'antd';
import { IAppProps } from 'App.interfaces';

export const AppContent = styled(Content)`
    padding: 10px 20px;
    min-height: 380px;
`;

export const FooterStld = styled(Footer) <IAppProps>`
    background-color: ${({ theme, themeStyle }) =>
        themeStyle === "light" ? theme.colors.backgrndLight : theme.colors.backgrndDark
    };
    color: ${({ theme, themeStyle }) =>
        themeStyle === "light" ? theme.colors.fontDark : theme.colors.fontLight
    };
    text-align: center;
`;

export const LayoutStld = styled(Layout) <IAppProps>`
    background-color: ${({ theme, themeStyle }) =>
        themeStyle === "light" ? theme.colors.backgrndLight : theme.colors.backgrndDark
    };
`;