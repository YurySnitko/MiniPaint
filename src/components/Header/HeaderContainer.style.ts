import { Header } from 'antd/lib/layout/layout';
import styled from 'styled-components'

export const AppName = styled.div`
    color: #eee;
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
    position: 'fixed';
    z-index: 1;
    width: '762px'
`