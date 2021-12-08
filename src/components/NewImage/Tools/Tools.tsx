import { Button } from "antd"
import { observer } from "mobx-react-lite"
import { ChangeEventHandler } from "react"
import { useStore } from "../../.."
import { BtnIcon } from "./BtnIcon"
import { LineWidthBtn } from "../../Buttons/LineWidthBtn"
import { useNavigate } from "react-router"
import { Color, ToolsDiv } from "./Tools.styles"
import { tools } from "./toolsArray"
import { SaveBtn } from "../../Buttons/Buttons.styles"
import { CanvasRefPropType } from "../NewImage.types"

export const Tools: React.FC<CanvasRefPropType> = observer(({ canvasRef }) => {
    const { newImageStore } = useStore();
    const navigate = useNavigate();

    const handleClick = (tool: string) => {
        newImageStore.setChosenTool(tool);
    }

    const onColorChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        newImageStore.setChosenColor(e.currentTarget.value)
    }

    const saveImage = () => {
        if (canvasRef.current) {
            newImageStore.saveImage(canvasRef.current.toDataURL())
            navigate('/images')
        }
    }

    return <ToolsDiv>
        {tools.map(tool => {
            return <Button onClick={() => handleClick(tool.action)} block={true}>
                <BtnIcon image={tool.image} />
            </Button>
        })}
        <Color type="color" onChange={onColorChange} value={newImageStore.chosenColor} />
        <LineWidthBtn />
        <SaveBtn type="primary" onClick={saveImage} block={true}>Save</SaveBtn>
    </ToolsDiv>
})
