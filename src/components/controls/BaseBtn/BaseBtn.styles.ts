import { Button } from "antd";
import styled from "styled-components";

export const BaseBtnStld = styled(Button)`
    background-color: ${({ theme }) => theme.colors.primary};
`