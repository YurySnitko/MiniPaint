export const BtnIcon: React.FC<PropsType> = ({image}) => {
    return <img src={image} alt="button logo" width="100%" />
}

type PropsType = {
    image: string
}

