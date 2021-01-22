import { createGlobalStyle } from 'styled-components'

//TODO change bg + flex
export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  }
  body {
    width: 100vh;
    height: 100vh;
    /* background-color: #AEB5B9; */
  }
  #root {
    display:flex;
  }
`
