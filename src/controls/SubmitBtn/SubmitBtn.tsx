import { BaseBtn } from "../BaseBtn/BaseBtn"
import { SubmitBtnProps } from "./SubmitBtn.interfaces"

export const SubmitBtn: React.FC<SubmitBtnProps> = ({ children, icon }) => {
    return <BaseBtn block={true} htmlType="submit" icon={icon}>
        {children}
    </BaseBtn>
}