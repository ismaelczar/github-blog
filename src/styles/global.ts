import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px #3a536b;
}

body {
  background: #071422;
  color: #AFC2D4;
  
  -webkit-font-smoothing:antialiased;
}

body,input,text-area, button {
  font: 400 1rem Nunito, sans-serif;
}
`
