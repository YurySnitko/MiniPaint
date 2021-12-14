import { Button } from "antd";
import styled from "styled-components";
import { CreateImageBtnPropsType } from "./CreateImageBtn.types";

export const CreateImageBtnStld = styled(Button) <CreateImageBtnPropsType>`
    color: ${({ theme, themeStyle }) =>
        themeStyle === "dark" ? theme.colors.btnLink : theme.colors.primary
    };
`