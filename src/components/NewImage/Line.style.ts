import styled from 'styled-components'

type PropsType = {
    width: string
}

export const Line = styled.div`
    display: block;
    content: '';
    border-top: ${(props: PropsType) => props.width} solid black;
    width: 30px;
`;