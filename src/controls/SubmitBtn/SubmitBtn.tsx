import { BaseBtn } from "../BaseBtn/BaseBtn"
import { ISubmitBtnProps } from "./SubmitBtn.interfaces"

export const SubmitBtn: React.FC<ISubmitBtnProps> = ({ children, icon }) => {
    return <BaseBtn block={true} htmlType="submit" icon={icon}>
        {children}
    </BaseBtn>
}