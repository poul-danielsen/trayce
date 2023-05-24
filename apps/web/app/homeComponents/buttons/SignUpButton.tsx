"use client";

import { SignUpButton } from "@clerk/nextjs";
import { Button } from "@mui/material";

const SignUpButtonMUI = () => {
  return (
    <SignUpButton mode="modal">
      <Button variant="outlined" fullWidth>
        Sign Up
      </Button>
    </SignUpButton>
  )
}

export default SignUpButtonMUI;