import { BaseBtn } from "../BaseBtn/BaseBtn"
import { SaveBtnPropsType } from "./SaveBtn.types"

export const SaveBtn: React.FC<SaveBtnPropsType> = ({ saveImage }) => {
    return <BaseBtn onclick={saveImage} block={true}>Save</BaseBtn>
}