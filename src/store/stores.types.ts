export type UsersDataType = {
    [key: string]: UserDataType
}

export type UserDataType = {
    email: string
    images: {[key: string]: string}
}

export type ThemeType = "light" | "dark";