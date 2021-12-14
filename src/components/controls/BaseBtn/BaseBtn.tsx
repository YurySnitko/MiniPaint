import { BaseBtnStld } from "./BaseBtn.styles"
import { BaseBtnPropsType } from "./BaseBtn.types"

export const BaseBtn: React.FC<BaseBtnPropsType> = ({ children, icon, onclick, block, htmlType }) => {
    return <BaseBtnStld type="primary" icon={icon} onClick={onclick} block={block} htmlType={htmlType}>
        {children}
    </BaseBtnStld>
}