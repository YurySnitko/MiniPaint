import { Button, Input } from "antd"
import { observer } from "mobx-react-lite"
import { ChangeEventHandler } from "react"
import { useStore } from "../.."
import { LineWidthBtn } from "./LineWidthBtn"
import { ToolsDiv } from "./Tools.style"

export const Tools: React.FC = observer(() => {
    const { newImageStore } = useStore();

    const handleClick = (tool: string) => {
        newImageStore.setChosenTool(tool);
    }

    const onColorChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        newImageStore.setChosenColor(e.currentTarget.value)
    }

    return <ToolsDiv>
        <Button onClick={() => handleClick('pen')} block={true}>Pen</Button>
        <Button onClick={() => handleClick('line')}>Line</Button>
        <Button onClick={() => handleClick('rect')}>Rect</Button>
        <Button onClick={() => handleClick('circle')}>Circle</Button>
        <Input type="color" onChange={onColorChange} value={newImageStore.chosenColor} />
        <LineWidthBtn />
    </ToolsDiv>
})