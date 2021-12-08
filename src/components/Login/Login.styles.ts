import { LoginPropsType } from './Login.types';
import styled from 'styled-components'

export const Container = styled.div<LoginPropsType>`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({theme, themeStyle}) => themeStyle === "dark" ? theme.colors.fontDark : theme.colors.fontLight};

    & form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        padding: 15px;
        width: 80%;
        max-width: 300px;
    }

    & h1 {
        color: ${({theme, themeStyle}) => themeStyle === "dark" ? theme.colors.fontDark : theme.colors.fontLight};
    }
`;