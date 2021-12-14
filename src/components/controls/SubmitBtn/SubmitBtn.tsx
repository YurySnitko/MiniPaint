import { BaseBtn } from "../BaseBtn/BaseBtn"
import { SubmitBtnPropsType } from "./SubmitBtn.types"

export const SubmitBtn: React.FC<SubmitBtnPropsType> = ({ children, icon }) => {
    return <BaseBtn block={true} htmlType="submit" icon={icon}>
        {children}
    </BaseBtn>
}