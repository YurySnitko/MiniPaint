import { observer } from "mobx-react-lite"
import { ChangeEventHandler } from "react"
import { useStore } from "index"
import { useNavigate } from "react-router"
import { Color, ToolsContainer } from "./Tools.styles"
import { tools } from "./toolsArray"
import { CanvasRefPropType } from "../NewImage.types"
import { SaveBtn } from "components/controls/SaveBtn/SaveBtn"
import { ToolBtn } from "components/controls/ToolBtn/ToolBtn"
import { LineWidthBtn } from "components/controls/LineWidthBtn/LineWidthBtn"

export const Tools: React.FC<CanvasRefPropType> = observer(({ canvasRef }) => {
    const { newImageStore } = useStore();
    const navigate = useNavigate();

    const onColorChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        newImageStore.setChosenColor(e.currentTarget.value)
    }

    const saveImage = () => {
        if (canvasRef.current) {
            newImageStore.saveImage(canvasRef.current.toDataURL())
            navigate('/images')
        }
    }

    return <ToolsContainer>
        {tools.map(tool => <ToolBtn key={tool.action} action={tool.action} image={tool.image} />)}
        <Color type="color" onChange={onColorChange} value={newImageStore.chosenColor} />
        <LineWidthBtn />
        <SaveBtn saveImage={saveImage} />
    </ToolsContainer>
})
