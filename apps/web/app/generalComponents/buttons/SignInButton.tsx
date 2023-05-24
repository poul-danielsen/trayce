"use client";

import { SignInButton } from "@clerk/nextjs";
import { Button } from "@mui/material";

const SignInButtonMUI = () => {
  return (
    <SignInButton mode="modal" >
    <Button variant="contained" fullWidth>
      Sign In
    </Button>
    </SignInButton>
  )
}

export default SignInButtonMUI;