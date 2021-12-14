export type BaseBtnPropsType = {
    icon?: React.ReactNode
    onclick?: () => void
    block?: boolean
    htmlType?: "button" | "reset" | "submit" | undefined
}