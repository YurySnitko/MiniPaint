import styled from 'styled-components'
import { Content, Footer } from 'antd/lib/layout/layout';

import { Layout } from 'antd';
import { ThemeType } from 'store/stores.types';

export const AppContent = styled(Content)`
    padding: 10px 20px;
    min-height: 380px;
`;

export const FooterStld = styled(Footer) <{themeStyle: ThemeType}>`
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