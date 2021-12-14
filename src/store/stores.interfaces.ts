export interface IUsersData {
    [key: string]: IUserData
}

export interface IUserData {
    email: string
    images: {[key: string]: string}
}

export type ThemeType = "light" | "dark";