import { createGlobalStyle } from 'styled-components'
import bgImage from 'assets/bgImage.jpg'

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-size: 14px
  }
  body {
    width: 100vw;
    height: 100vh;
    background-image: url(${bgImage})
  }
`
