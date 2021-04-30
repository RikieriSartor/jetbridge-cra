import { makeStyles } from "@material-ui/styles"
import { primaryFont } from "."

/**
 * A hook that installs global CSS overrides.
 */
const useGlobalCSS = makeStyles({
  "@global": {
    body: {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      fontFamily: primaryFont,
    },
  },
})

export default useGlobalCSS
