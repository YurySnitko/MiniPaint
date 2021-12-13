import { observer } from "mobx-react-lite"
import { Dropdown, Menu } from "antd";
import { MenuClickEventHandler } from "rc-menu/lib/interface";
import { useStore } from "index";
import { Line, LineBtnStld } from "./Buttons.styles";

export const LineWidthBtn: React.FC = observer(() => {
    const { newImageStore } = useStore();

    const handleMenuClick: MenuClickEventHandler = (e) => {
        newImageStore.setLineWidth(Number(e.key))
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<Line width="1px" />}>
                1px
            </Menu.Item>
            <Menu.Item key="2" icon={<Line width="2px" />}>
                2px
            </Menu.Item>
            <Menu.Item key="3" icon={<Line width="3px" />}>
                3px
            </Menu.Item>
        </Menu>
    )

    return <Dropdown overlay={menu}>
        <LineBtnStld block={true}>
            <Line width={`${newImageStore.lineWidth}px`} />
        </LineBtnStld>
    </Dropdown>
})