import { BaseBtnProps } from 'controls/BaseBtn/BaseBtn.interfaces';

export interface LogoutBtnProps extends BaseBtnProps {
  logout: () => void;
}
