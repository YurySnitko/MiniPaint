import { Button, Dropdown, Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { MenuClickEventHandler } from "rc-menu/lib/interface";
import SubMenu from 'antd/lib/menu/SubMenu';
import { useStore } from '../..';

export const SettingsBtn: React.FC = () => {
    const {settingsStore} = useStore()

    const handleMenuClick: MenuClickEventHandler = (e) => {
        settingsStore.setTheme(e.key === '1' ? "light" : "dark")
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <SubMenu title="Theme">
                <Menu.Item key="1">
                    light 
                </Menu.Item>
                <Menu.Item key="2">
                    dark
                </Menu.Item>
            </SubMenu>
        </Menu>
    )

    return <Dropdown overlay={menu} trigger={['click']}>
            <Button type="primary" icon={<SettingOutlined />} />
        </Dropdown>
}
