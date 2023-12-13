import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: inherit;
    color: inherit;
  }

  html {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: #616161;
  }

  body {
    margin: 0;
    background-color: #f1f5f8;
  }

  img {
    max-width: 100%;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`

export default GlobalStyle
