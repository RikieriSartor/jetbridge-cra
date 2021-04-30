import React from "react"
import { RouteProps, Route, Redirect } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

interface IPrivateRouteProps extends RouteProps {
  component: React.ComponentType
}

const PrivateRoute = ({ component: Component, ...rest }: IPrivateRouteProps) => {
  const { user } = useAuth()

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!user) {
          if (!sessionStorage.getItem("@JetBridge:targetPath")) {
            sessionStorage.setItem("@JetBridge:targetPath", location.pathname)
          }
          return <Redirect to="/signin" />
        }

        return Component ? <Component /> : null
      }}
    />
  )
}

export default PrivateRoute
