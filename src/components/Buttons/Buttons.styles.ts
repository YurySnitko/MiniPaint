import { Button } from "antd";
import styled from "styled-components";
import { CreateImageBtnPropsType, LinePropsType } from "./Buttons.types";

export const Line = styled.div<LinePropsType>`
    display: block;
    content: '';
    border-top: ${({ width }) => width} solid black;
    width: 100%;
`

export const LineBtnStld = styled(Button)`
    min-height: 50px;
`

export const CreateImageBtnStld = styled(Button) <CreateImageBtnPropsType>`
    color: ${({ theme, themeStyle }) =>
        themeStyle === "dark" ? theme.colors.btnLink : theme.colors.primary
    };
`

export const SaveBtn = styled(Button)`
    background-color: ${({ theme }) => theme.colors.primary};
`

export const LogoutBtnStld = styled(Button)`
    background-color: ${({ theme }) => theme.colors.primary};
`

export const SettingsBtnStld = styled(Button)`
    background-color: ${({ theme }) => theme.colors.primary};
`