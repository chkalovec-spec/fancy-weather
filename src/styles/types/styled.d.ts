import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      gray: string
      grayDark: string
      grayLight: string
      white: string
    }
    fontSize: {
      md: string
    }
    lineHeight: {
      md: string
    }
    containerWidth: {
      lg: string
    }
  }
}
