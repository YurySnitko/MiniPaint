import { useRef } from "react"
import { Canvas } from "./Canvas/Canvas"
import { NewImageContainer } from "./NewImage.styles"
import { Tools } from "./Tools/Tools"

export const NewImage = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    return <NewImageContainer>
        <Tools canvasRef={canvasRef} />
        <Canvas canvasRef={canvasRef} />
    </NewImageContainer>
}