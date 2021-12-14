import stores from "./stores";

export interface UsersData {
    [key: string]: UserData
}

export interface UserData {
    email: string
    images: {[key: string]: string}
}

export type ThemeType = "light" | "dark";

export type StoreType = typeof stores;