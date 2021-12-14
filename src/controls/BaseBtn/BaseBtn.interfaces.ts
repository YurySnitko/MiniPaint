export interface IBaseBtnProps {
    icon?: React.ReactNode
    onclick?: () => void
    block?: boolean
    htmlType?: "button" | "reset" | "submit"
}