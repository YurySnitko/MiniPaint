import { Button } from "antd";
import styled from "styled-components";
import { CreateImageBtnProps } from "./CreateImageBtn.interfaces";

export const CreateImageBtnStld = styled(Button) <CreateImageBtnProps>`
    color: ${({ theme, themeStyle }) =>
        themeStyle === "dark" ? theme.colors.btnLink : theme.colors.primary
    };
`