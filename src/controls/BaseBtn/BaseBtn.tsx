import { BaseBtnStld } from "./BaseBtn.styles"
import { IBaseBtnProps } from "./BaseBtn.interfaces"

export const BaseBtn: React.FC<IBaseBtnProps> = ({ children, icon, onclick, block, htmlType }) => {
    return <BaseBtnStld type="primary" icon={icon} onClick={onclick} block={block} htmlType={htmlType}>
        {children}
    </BaseBtnStld>
}