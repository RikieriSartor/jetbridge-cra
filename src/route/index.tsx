import * as React from "react"
import { Switch } from "react-router-dom"
import HomePage from "../pages/Home"
import SignInPage from "../pages/SignIn"
import PrivateRoute from "./components/PrivateRoute"
import PublicRoute from "./components/PublicRoute"

interface IRoutesProps {}

const Routes = (props: IRoutesProps) => {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={HomePage} />
      <PublicRoute exact path="/signin" component={SignInPage} />
      <PublicRoute exact path="/signup" component={SignInPage} />
      <PublicRoute exact path="/recover" component={SignInPage} />
    </Switch>
  )
}

export default Routes
