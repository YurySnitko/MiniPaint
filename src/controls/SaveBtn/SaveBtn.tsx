import { BaseBtn } from "../BaseBtn/BaseBtn"
import { ISaveBtnProps } from "./SaveBtn.interfaces"

export const SaveBtn: React.FC<ISaveBtnProps> = ({ saveImage }) => {
    return <BaseBtn onclick={saveImage} block={true}>Save</BaseBtn>
}