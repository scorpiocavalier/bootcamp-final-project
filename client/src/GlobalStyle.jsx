import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Arial', sans-serif;
    box-sizing: border-box;
  }

  body {
    background: #f4f6f8;
  }

  h1 {
    font-family: 'Quattrocento', serif;
  }

  h2, h3 {
    font-family: 'Arial', sans-serif;
  }

  a {
    text-decoration: none;
    margin: 0;

    &:link, &:active, &:visited {
      color: black;
    }
  }

  li {
    list-style-type: none;
  }

  button {
    border: none;
    border-radius: 5px;
    background: none;
  }
`