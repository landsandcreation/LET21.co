import React from "react"
import { UnauthenticatedLayout } from "components/layout"

import { AuthLayout, SignInForm } from "../components/auth"

const SignIn = props => (
  <UnauthenticatedLayout {...props}>
  
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  </UnauthenticatedLayout>
)

export default SignIn
