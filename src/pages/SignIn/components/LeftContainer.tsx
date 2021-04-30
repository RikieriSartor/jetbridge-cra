import React, { useState } from "react"
import * as Yup from "yup"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
import { makeStyles } from "@material-ui/styles"
import {
  Box,
  Grid,
  Input,
  Button,
  IconButton,
  InputLabel,
  Typography,
  FormControl,
  FormHelperText,
  InputAdornment,
} from "@material-ui/core"
import { Visibility, VisibilityOff } from "@material-ui/icons"
import { useAuth } from "../../../hooks/useAuth"
import { getYupValidationErrors } from "../../../utils/error"
import logo from "../../../assets/logo.png"

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },
  paragraph: {
    color: theme.palette.text.secondary,
    padding: 0,
    marginTop: 0,
    marginBottom: 12,
  },
  form: {
    display: "flex",
    maxWidth: 400,
    flexDirection: "column",
  },
  forgotPasswordLink: {
    color: theme.palette.secondary.main,
    fontSize: 14,
    textAlign: "center",
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}))

interface ISignInFormState {
  email: string
  password: string
  showPassword: boolean
}

interface IErrorMessageState {
  email?: string
  password?: string
}

const signInSchema = Yup.object().shape({
  email: Yup.string().email("Please fill a valid e-mail.").required("This field is required."),
  password: Yup.string().required("This field is required."),
})

const LeftContainer = () => {
  const classes = useStyles()
  const { signIn } = useAuth()
  const [values, setValues] = useState<ISignInFormState>({
    email: "",
    password: "",
    showPassword: false,
  })
  const [errorMessage, setErrorMessage] = useState<IErrorMessageState>({
    email: "",
    password: "",
  })

  const handleChange = (prop: keyof ISignInFormState) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    setErrorMessage({ email: "", password: "" })

    signInSchema
      .validate({ email: values.email, password: values.password }, { abortEarly: false })
      .then((values) => {
        signIn(values.email, values.password)
      })
      .catch((e) => {
        if (e instanceof Yup.ValidationError) {
          setErrorMessage(getYupValidationErrors(e))
        }
      })
  }

  return (
    <Grid item xs={12} md={6} className={classes.container}>
      <Box>
        <a href="https://invitae.com">
          <img src={logo} alt="Invitae Logo" />
        </a>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Typography variant="h3" style={{ marginTop: 24, marginBottom: 12 }}>
            Sign In.
          </Typography>
          <p className={classes.paragraph}>Sign in with your data that you have entered during your registration.</p>

          <FormControl error={!!errorMessage.email}>
            <InputLabel htmlFor="email">E-mail</InputLabel>
            <Input
              id="email"
              value={values.email}
              onChange={handleChange("email")}
              placeholder="youremail@example.com"
            />
            <FormHelperText>{errorMessage.email}</FormHelperText>
          </FormControl>

          <FormControl
            error={!!errorMessage.password}
            style={{
              marginTop: 24,
              marginBottom: 36,
            }}
          >
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type="password"
              value={values.password}
              onChange={handleChange("password")}
              placeholder="******"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText>{errorMessage.password}</FormHelperText>
          </FormControl>

          <Button
            size="large"
            type="submit"
            color="primary"
            style={{ marginBottom: 24, fontWeight: 600 }}
            variant="contained"
          >
            Sign In
          </Button>

          <a className={classes.forgotPasswordLink} href="/recover">
            Forgot password?
          </a>
        </form>
      </Box>
    </Grid>
  )
}

export default LeftContainer
