import { Button, Input } from "antd"
import { observer } from "mobx-react-lite"
import { ChangeEventHandler, RefObject } from "react"
import { useStore } from "../.."
import { BtnIcon } from "./BtnIcon"
import { LineWidthBtn } from "./LineWidthBtn"
import { ToolsDiv } from "./Tools.style"
import pencil from "../../assets/pencil.png"
import line from "../../assets/line.png"
import rectangle from "../../assets/rectangle.png"
import circle from "../../assets/circle.png"
import { useNavigate } from "react-router"

export const Tools: React.FC<PropsType> = observer(({canvasRef}) => {
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
        <Button onClick={() => handleClick('pen')} block={true}><BtnIcon image={pencil} /></Button>
        <Button onClick={() => handleClick('line')} block={true}><BtnIcon image={line} /></Button>
        <Button onClick={() => handleClick('rect')} block={true}><BtnIcon image={rectangle} /></Button>
        <Button onClick={() => handleClick('circle')} block={true}><BtnIcon image={circle} /></Button>
        <Input type="color" onChange={onColorChange} value={newImageStore.chosenColor} 
            style={{minHeight: "50px", padding: "10px"}} />
        <LineWidthBtn />
        <Button type="primary" onClick={saveImage} block={true}>Save</Button>
    </ToolsDiv>
})

type PropsType = {
    canvasRef: RefObject<HTMLCanvasElement>
}