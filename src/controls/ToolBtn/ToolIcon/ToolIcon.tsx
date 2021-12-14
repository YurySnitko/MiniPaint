import { Img } from "./ToolIcon.styles"
import { IToolIconProps } from "./ToolIcon.interfaces"

export const ToolIcon: React.FC<IToolIconProps> = ({ image }) => {
    return <Img src={image} alt="button logo" />
}