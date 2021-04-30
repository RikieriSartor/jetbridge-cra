import React from "react"

import { Theme } from "@material-ui/core/styles/createMuiTheme"
import { makeStyles } from "@material-ui/styles"
import { Box, Button, Grid, IconButton, Typography } from "@material-ui/core"
import { Instagram, LinkedIn, Mail, Twitter } from "@material-ui/icons"

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    color: "#fff",
    width: "100%",
    height: "100%",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.secondary.main,
  },
  paragraph: {
    color: theme.palette.text.secondary,
    padding: 0,
    marginTop: 0,
    marginBottom: 12,
  },
  signUpButton: {
    color: "#fff",
    fontWeight: 600,
    background: "linear-gradient(90deg,#11ada0,#0888b2)",
  },
}))

const RightContainer = () => {
  const classes = useStyles()

  return (
    <Grid item xs={12} md={6} className={classes.container}>
      <Box>
        <Typography variant="h3" style={{ marginTop: 24, marginBottom: 24, maxWidth: 500 }}>
          Don't have an account?
        </Typography>

        <Button href="/signup" variant="outlined" size="large" color="inherit" style={{ fontWeight: 600 }}>
          Register Now
        </Button>

        <div style={{ marginTop: 24 }}>
          <IconButton style={{ color: "#fff" }} href="https://invitae.com/contact">
            <Mail />
          </IconButton>
          <IconButton style={{ color: "#fff" }} href="https://twitter.com/Invitae">
            <Twitter />
          </IconButton>
          <IconButton style={{ color: "#fff" }} href="https://linkedin.com/company/invitae">
            <LinkedIn />
          </IconButton>
          <IconButton style={{ color: "#fff" }} href="https://instagram.com/invitae">
            <Instagram />
          </IconButton>
        </div>
      </Box>
    </Grid>
  )
}

export default RightContainer
