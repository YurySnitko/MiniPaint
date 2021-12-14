import styled from 'styled-components'

export const NewImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.backgrndLight};
    border: 2px solid ${({ theme }) => theme.colors.grey};
    box-shadow: 0px 4px 7px -3px rgb(0 0 0 / 20%), 0px 7px 12px 1px rgb(0 0 0 / 14%), 0px 2px 16px 2px rgb(0 0 0 / 12%);
`;