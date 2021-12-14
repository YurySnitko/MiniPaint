import { Button } from "antd";
import styled from "styled-components";
import { ICreateImageBtnProps } from "./CreateImageBtn.interfaces";

export const CreateImageBtnStld = styled(Button) <ICreateImageBtnProps>`
    color: ${({ theme, themeStyle }) =>
        themeStyle === "dark" ? theme.colors.btnLink : theme.colors.primary
    };
`