import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: #f4f6f8;
    font-family: 'Arial', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Marck Script', cursive;
    text-decoration: underline;
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

    &:hover {
		  cursor: pointer;
	  }
  }
`
