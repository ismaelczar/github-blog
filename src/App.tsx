import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import { UserProvider } from './contexts/UserContext'
import { IssuesProvider } from './contexts/IssuesContext'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <UserProvider>
        <IssuesProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </IssuesProvider>
      </UserProvider>
    </ThemeProvider>
  )
}
