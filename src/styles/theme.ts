import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    gray: '#aeb5b980',
    grayDark: '#4c525566',
    grayLight: '#b4b8bb66',
    white: '#ffffff',
    whiteDark: '#ffffff66',
    divider: '#e4e3e3',
  },

  fontSize: {
    sm: '14px',
    lg: '24px',
    xl: '44px',
    xxl: '306px',
  },
  fontWeight: {
    '400': 400,
    '700': 700,
  },

  lineHeight: {
    sm: '17px',
    lg: '29px',
    xl: '54px',
    xxl: '373px',
  },

  maxWidth: {
    xl: '1140px',
  },
  size: {
    md: {
      padding: '1rem',
      height: '45px',
    },
  },
  position: {
    relative: 'relative',
    absolute: 'absolute',
  },
  flex: {
    justify: {
      between: 'space-between',
    },
    direction: {
      column: 'column',
    },
  },
  display: {
    block: 'block',
    inlineBlock: 'inline-block',
  },
}
