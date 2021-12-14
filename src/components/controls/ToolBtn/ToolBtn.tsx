import { Button } from "antd";
import { useStore } from "index";
import { ToolBtnPropsType } from "./ToolBtn.types"
import { ToolIcon } from "./ToolIcon/ToolIcon";

export const ToolBtn: React.FC<ToolBtnPropsType> = ({ action, image }) => {
    const { newImageStore } = useStore();

    const handleClick = () => {
        newImageStore.setChosenTool(action);
    }

    return <Button onClick={handleClick} block={true}>
        <ToolIcon image={image} />
    </Button>
}