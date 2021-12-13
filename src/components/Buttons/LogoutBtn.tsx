import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { LogoutBtnPropsType } from './Buttons.types';

export const LogoutBtn: React.FC<LogoutBtnPropsType> = ({ logout }) => {
    return <Button type="primary" onClick={() => logout()} icon={<LogoutOutlined />}>Sign Out</Button>
}


