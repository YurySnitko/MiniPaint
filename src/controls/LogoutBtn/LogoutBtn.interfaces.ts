import { IBaseBtnProps } from "controls/BaseBtn/BaseBtn.interfaces";

export interface ILogoutBtnProps extends IBaseBtnProps {
    logout: () => void
}