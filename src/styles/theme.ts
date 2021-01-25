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
    md: '14px',
  },
  fontWeight: {
    '400': 400,
    '700': 700,
  },

  lineHeight: {
    md: '17px',
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
  },
}
