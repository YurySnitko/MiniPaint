import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
        margin: 0;
        display: flex;
        justify-content: center;
    }

    body {
        margin: 0;
        max-width: 762px;
        font-family: 'Nunito Sans', sans-serif;
    }
`;
