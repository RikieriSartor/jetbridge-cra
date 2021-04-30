import React from "react"
import SignIn from "."
import themeDecorator from "../../theme/StorybookThemeDecorator"

export default {
  title: "Pages/SignIn",
  component: SignIn,
  parameters: {
    componentSubtitle: "Screen a user first sees when they need to sign in.",
  },
  decorators: [themeDecorator],
}

export const initial = () => <SignIn />
