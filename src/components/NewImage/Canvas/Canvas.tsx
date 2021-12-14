import { observer } from "mobx-react-lite"
import React, { MouseEventHandler, useEffect, useRef, useState } from "react"
import { useStore } from "index"
import { CanvasContainer } from "./Canvas.styles";
import { ICanvasRefProps } from "../NewImage.interfaces";

export const Canvas: React.FC<ICanvasRefProps> = observer(({ canvasRef }) => {
    const { newImageStore } = useStore();
    const contextRef = useRef<CanvasRenderingContext2D | null>(null)
    const [isDrawing, setIsDrawing] = useState<boolean>(false)
    const [drawingCoordinates, setDrawingCoordinates] = useState({ startX: 0, startY: 0 })

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            canvas.parentElement && (canvas.width = canvas.height = canvas.parentElement.clientWidth)

            const context = canvas.getContext("2d")
            if (context) {
                context.lineCap = "round"
                context.fillStyle = "white"
                context.fillRect(0, 0, canvas.width, canvas.height)
                contextRef.current = context
            }
        }
    }, [canvasRef])

    const startDrawing: MouseEventHandler<HTMLCanvasElement> = ({ nativeEvent }) => {
        const ctx = contextRef.current

        if (ctx && newImageStore.chosenTool) {
            const { offsetX, offsetY } = nativeEvent

            switch (newImageStore.chosenTool) {
                case 'line':
                case 'pen':
                    ctx.beginPath()
                    ctx.moveTo(offsetX, offsetY)
                    break
                case 'circle':
                    ctx.beginPath()
                    setDrawingCoordinates({ startX: offsetX, startY: offsetY })
                    break
                case 'rect':
                    setDrawingCoordinates({ startX: offsetX, startY: offsetY })
                    break
            }
            setIsDrawing(true)
        }
    }

    const finishDrawing: MouseEventHandler<HTMLCanvasElement> = ({ nativeEvent }) => {
        const ctx = contextRef.current
        const { startX, startY } = drawingCoordinates

        if (ctx && newImageStore.chosenTool) {
            const { offsetX, offsetY } = nativeEvent
            ctx.strokeStyle = newImageStore.chosenColor
            ctx.lineWidth = newImageStore.lineWidth

            switch (newImageStore.chosenTool) {
                case 'line':
                    ctx.lineTo(offsetX, offsetY)
                    ctx.stroke()
                    ctx.closePath()
                    break
                case 'pen':
                    ctx.closePath()
                    break
                case 'circle':
                    const radius = Math.sqrt(Math.pow(offsetX - startX, 2) + Math.pow(offsetY - startY, 2))
                    ctx.arc(startX, startY, radius, 0, 2 * Math.PI)
                    ctx.stroke()
                    ctx.closePath()
                    break
                case 'rect':
                    ctx.strokeRect(startX, startY, offsetX - startX, offsetY - startY)
                    break
            }

            setIsDrawing(false)
        }
    }

    const draw: MouseEventHandler<HTMLCanvasElement> = ({ nativeEvent }) => {
        const ctx = contextRef.current
        if (!isDrawing || !ctx || !newImageStore.chosenTool) { return };
        const { offsetX, offsetY } = nativeEvent
        ctx.strokeStyle = newImageStore.chosenColor
        ctx.lineWidth = newImageStore.lineWidth
        if (newImageStore.chosenTool === "pen") {
            ctx.lineTo(offsetX, offsetY)
            ctx.stroke()
        }
    }

    return <CanvasContainer>
        <canvas
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={draw}
            ref={canvasRef}>
        </canvas>
    </CanvasContainer>
})