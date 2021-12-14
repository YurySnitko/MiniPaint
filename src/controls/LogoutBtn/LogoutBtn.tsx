import { LogoutOutlined } from '@ant-design/icons';
import { BaseBtn } from '../BaseBtn/BaseBtn';
import { ILogoutBtnProps } from './LogoutBtn.interfaces';

export const LogoutBtn: React.FC<ILogoutBtnProps> = ({ logout }) => {
    return <BaseBtn onclick={logout} icon={<LogoutOutlined />}>
        Sign Out
    </BaseBtn>
}


