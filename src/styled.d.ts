import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            backgrndDark: string
            backgrndLight: string
            fontDark: string
            fontLight: string
            btnLink: string
            primary: string
            blueDark: string
            grey: string
        }
    }
}