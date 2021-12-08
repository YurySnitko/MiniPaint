import { Button } from "antd";
import styled from "styled-components";
import { LinePropsType } from "./Buttons.types";

export const Line = styled.div<LinePropsType>`
    display: block;
    content: '';
    border-top: ${(props) => props.width} solid black;
    width: 100%;
`;

export const LineBtnStld = styled(Button)`
    min-height: 50px;
`

export const SaveBtn = styled(Button)`
`