import { Button } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

export const LogoutBtn: React.FC<PropsType> = ({logout}) => {
    return <div style={{ marginLeft: "auto" }}>
        <Button type="primary" onClick={() => logout()} icon={<LogoutOutlined />}>Sign Out</Button>
    </div>
}

type PropsType = {
    logout: () => void
}
