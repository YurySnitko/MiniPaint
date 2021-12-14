import { Button } from "antd";
import { useStore } from "index";
import { IToolBtnProps } from "./ToolBtn.interfaces"
import { ToolIcon } from "./ToolIcon/ToolIcon";

export const ToolBtn: React.FC<IToolBtnProps> = ({ action, image }) => {
    const { newImageStore } = useStore();

    const handleClick = () => {
        newImageStore.setChosenTool(action);
    }

    return <Button onClick={handleClick} block={true}>
        <ToolIcon image={image} />
    </Button>
}