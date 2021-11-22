import { Canvas } from "./Canvas"
import { NewImageContainer } from "./NewImageContainer.style"
import { Tools } from "./Tools"

export const NewImage = () => {
    return <NewImageContainer>
        <Tools />
        <Canvas />
    </NewImageContainer>
}