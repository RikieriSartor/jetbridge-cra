import React from "react"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
import { makeStyles } from "@material-ui/styles"
import { Box, Button, Grid, Typography } from "@material-ui/core"
import logo from "../../assets/logo.png"
import { useAuth } from "../../hooks/useAuth"

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
}))

const HomePage = () => {
  const classes = useStyles()
  const { signOut } = useAuth()

  return (
    <Grid className={classes.container} container direction="row" justify="center" alignItems="center">
      <Box alignItems="center" justifyContent="center" textAlign="center">
        <a href="https://invitae.com">
          <img src={logo} alt="Invitae Logo" />
        </a>

        <Typography variant="h3" style={{ marginTop: 24, marginBottom: 24 }}>
          Hello.
        </Typography>

        <Button
          color="primary"
          variant="outlined"
          size="large"
          style={{ marginBottom: 24, fontWeight: 600 }}
          onClick={() => signOut()}
        >
          Log out
        </Button>
      </Box>
    </Grid>
  )
}

export default HomePage
