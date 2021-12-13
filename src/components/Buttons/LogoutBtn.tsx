import { LogoutOutlined } from '@ant-design/icons';
import { LogoutBtnPropsType } from './Buttons.types';
import { LogoutBtnStld } from './Buttons.styles';

export const LogoutBtn: React.FC<LogoutBtnPropsType> = ({ logout }) => {
    return <LogoutBtnStld type="primary" onClick={() => logout()} icon={<LogoutOutlined />}>
        Sign Out
    </LogoutBtnStld>
}


