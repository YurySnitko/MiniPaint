import { makeAutoObservable } from "mobx"
import { ThemeType } from "./stores.interfaces"

export default class SettingsStore {
    themeStyle = "light" as ThemeType

    constructor() {
        makeAutoObservable(this)
    }

    setTheme(theme: ThemeType) {
        this.themeStyle = theme
    }
}