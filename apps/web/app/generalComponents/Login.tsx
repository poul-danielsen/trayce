"use client";

import { Grid } from "@mui/material";
import SignInButtonMUI from "./buttons/SignInButton";
import SignUpButtonMUI from "./buttons/SignUpButton";

const Login = () => {
  return (
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <SignInButtonMUI />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SignUpButtonMUI />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Login;