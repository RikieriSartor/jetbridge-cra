import * as React from "react"
import { MuiThemeProvider, CssBaseline } from "@material-ui/core"
import { theme } from "./theme"
import { BrowserRouter } from "react-router-dom"
import Routes from "./route"
import useGlobalCSS from "./theme/GlobalCSS"
import { AuthProvider } from "./hooks/useAuth"

const App: React.FC = () => {
  useGlobalCSS()

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthProvider>
    </MuiThemeProvider>
  )
}

export default App
