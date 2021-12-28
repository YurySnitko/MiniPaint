import { AuthProps } from './Auth.interfaces';
import styled from 'styled-components';

export const Container = styled.div<AuthProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme, themeStyle }) =>
    themeStyle === 'dark' ? theme.colors.fontLight : theme.colors.fontDark};

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
    color: ${({ theme, themeStyle }) =>
      themeStyle === 'dark' ? theme.colors.fontLight : theme.colors.fontDark};
  }

  & a {
    color: ${({ theme, themeStyle }) =>
      themeStyle === 'dark' ? theme.colors.btnLink : theme.colors.primary};
  }
`;
