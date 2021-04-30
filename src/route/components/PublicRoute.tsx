import React from "react"
import { RouteProps, Route, Redirect } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

interface IPublicRouteProps extends RouteProps {
  component: React.ComponentType
}

const PublicRoute = ({ component: Component, ...rest }: IPublicRouteProps) => {
  const { user } = useAuth()

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          const targetPath = sessionStorage.getItem("@JetBridge:targetPath")

          if (targetPath) {
            sessionStorage.removeItem("@JetBridge:targetPath")
          }

          return <Redirect to={targetPath || "/"} />
        }

        return Component ? <Component /> : null
      }}
    />
  )
}

export default PublicRoute
