import React from "react"
import { Grid } from "@material-ui/core"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
import { makeStyles } from "@material-ui/styles"
import LeftContainer from "./components/LeftContainer"
import RightContainer from "./components/RightContainer"
import curvedCropCornerShape from "../../assets/curvedCropCornerShape.svg"

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
    height: "100vh",
  },
  curvedCropCornerShapeLeft: {
    top: 0,
    left: 0,
    height: 96,
    [theme.breakpoints.down("sm")]: {
      height: 48,
    },
    position: "absolute",
  },
  curvedCropCornerShapeRight: {
    right: 0,
    bottom: 0,
    height: 96,
    [theme.breakpoints.down("sm")]: {
      height: 48,
    },
    position: "absolute",
    transform: "rotate(180deg)",
  },
}))

const SignInPage = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.container} container direction="row" justify="center" alignItems="center">
      <img src={curvedCropCornerShape} className={classes.curvedCropCornerShapeRight} alt="curved shape" />
      <img src={curvedCropCornerShape} className={classes.curvedCropCornerShapeLeft} alt="curved shape" />

      <LeftContainer />
      <RightContainer />
    </Grid>
  )
}

export default SignInPage
