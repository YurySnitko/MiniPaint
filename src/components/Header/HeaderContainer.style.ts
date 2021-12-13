import { Header } from 'antd/lib/layout/layout';
import styled from 'styled-components'

export const AppName = styled.div`
    color: ${({ theme }) => theme.colors.fontLight};
    font-size: xx-large;
    margin-right: auto;
`;

export const HeaderContent = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
`;

export const HeaderStld = styled(Header)`
    background-color: ${({ theme }) => theme.colors.blueDark};
    position: 'fixed';
    z-index: 1;
    width: '762px'
`