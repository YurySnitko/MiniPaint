import { useRef } from "react"
import { Canvas } from "./Canvas"
import { NewImageContainer } from "./NewImageContainer.style"
import { Tools } from "./Tools"

export const NewImage = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    return <NewImageContainer>
        <Tools canvasRef={canvasRef} />
        <Canvas canvasRef={canvasRef} />
    </NewImageContainer>
}