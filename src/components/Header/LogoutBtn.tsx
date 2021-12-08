import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

export const LogoutBtn: React.FC<PropsType> = ({ logout }) => {
    return <Button type="primary" onClick={() => logout()} icon={<LogoutOutlined />}>Sign Out</Button>
}

type PropsType = {
    logout: () => void
}
