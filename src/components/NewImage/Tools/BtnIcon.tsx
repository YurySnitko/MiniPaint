import { BtnIconPropsType } from "../NewImage.types"

export const BtnIcon: React.FC<BtnIconPropsType> = ({ image }) => {
    return <img src={image} alt="button logo" width="100%" />
}

