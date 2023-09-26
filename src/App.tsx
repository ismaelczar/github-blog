import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Blog } from './pages/Blog'
import { UserProvider } from './contexts/UserContext'
import { IssuesProvider } from './contexts/IssuesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <UserProvider>
        <IssuesProvider>
          <Blog />
        </IssuesProvider>
      </UserProvider>
    </ThemeProvider>
  )
}
