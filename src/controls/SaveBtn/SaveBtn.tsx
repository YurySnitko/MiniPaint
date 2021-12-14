import { BaseBtn } from "../BaseBtn/BaseBtn"
import { SaveBtnProps } from "./SaveBtn.interfaces"

export const SaveBtn: React.FC<SaveBtnProps> = ({ saveImage }) => {
    return <BaseBtn onclick={saveImage} block={true}>Save</BaseBtn>
}