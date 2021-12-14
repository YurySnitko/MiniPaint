import { LogoutOutlined } from '@ant-design/icons';
import { BaseBtn } from '../BaseBtn/BaseBtn';
import { LogoutBtnPropsType } from './LogoutBtn.types';

export const LogoutBtn: React.FC<LogoutBtnPropsType> = ({ logout }) => {
    return <BaseBtn onclick={logout} icon={<LogoutOutlined />}>
        Sign Out
    </BaseBtn>
}


