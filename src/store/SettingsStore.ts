import { makeAutoObservable } from "mobx"

export default class SettingsStore {
    themeStyle = "light" as ThemeType

    constructor() {
        makeAutoObservable(this)
    }

    setTheme(theme: ThemeType) {
        this.themeStyle = theme
    }
}

export type ThemeType = "light" | "dark";