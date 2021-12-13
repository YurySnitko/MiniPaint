import { ThemeType } from 'store/SettingsStore';
export type LinePropsType = {
    width: string
}

export type LogoutBtnPropsType = {
    logout: () => void
}

export type CreateImageBtnPropsType = {
    themeStyle: ThemeType
}