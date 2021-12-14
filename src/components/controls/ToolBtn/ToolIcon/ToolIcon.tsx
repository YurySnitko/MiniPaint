import { ToolIconPropsType } from "./ToolIcon.types"

export const ToolIcon: React.FC<ToolIconPropsType> = ({ image }) => {
    return <img src={image} alt="button logo" width="100%" />
}