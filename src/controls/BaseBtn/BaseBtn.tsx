import { BaseBtnStld } from "./BaseBtn.styles"
import { BaseBtnProps } from "./BaseBtn.interfaces"

export const BaseBtn: React.FC<BaseBtnProps> = ({ children, icon, onclick, block, htmlType }) => {
    return <BaseBtnStld type="primary" icon={icon} onClick={onclick} block={block} htmlType={htmlType}>
        {children}
    </BaseBtnStld>
}