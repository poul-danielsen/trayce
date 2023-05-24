"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { UserAttending } from "../page";
import { registerAttendance } from "../../../../utils/cloudflare";
import Registered from "./Registered";
import { Button, Grid } from "@mui/material";

type interactableState = "unregistered" | "failed";
type uninteractableState = "loading" | "registered";
type RegistrationState = interactableState | uninteractableState;

const handleRegistration = async (
  user: UserAttending, 
  setter: Dispatch<SetStateAction<RegistrationState>>
) => {
  setter("loading")

  const success = await registerAttendance(user);

  if (!success) {
    setter("failed")
    return;
  }

  setter("registered")
}


const Register = ({user}: {user: UserAttending}) => {
  const [registrationState, setRegistrationState] = useState<RegistrationState>("unregistered")
  
  if (registrationState === "registered") {
    return <Registered />;
  }

  if (registrationState === "unregistered") {
    return (
      <Grid item xs={12}>
        <Button 
          variant="contained" 
          onClick={() => handleRegistration(user, setRegistrationState)}
          fullWidth
          >
          Register for this event
        </Button>
      </Grid>
    )
  }

  if (registrationState === "loading") {
    return (
      <Grid item xs={12}>
        <Button variant="outlined" fullWidth>
          Loading...
        </Button>
      </Grid>
    )
  }

  return (
    <Grid item xs={12}>
      <Button 
        variant="contained"
        onClick={() => handleRegistration(user, setRegistrationState)}
        fullWidth
      >
        Failed to register. Try again?
      </Button>
    </Grid>
  )
}

export default Register;