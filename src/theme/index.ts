import { createMuiTheme } from "@material-ui/core/styles"

// main google font to apply to all elements by default
export const primaryFont = process.env.REACT_APP_DEFAULT_FONT

// our theme
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#128279",
    },
    secondary: {
      main: "#112a44",
    },
  },

  typography: {
    fontFamily: primaryFont,
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
})

// extend theme type
declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {}

  // we can extend theme with custom keys here
  interface ThemeOptions {}
}
