"use client";

import { Grid, Typography } from "@mui/material";

const EventTitle = () => {
  return (
    <Grid item spacing={2} xs={12}>
      <Typography component="h1" variant="h2">
        Test Event
      </Typography>
      <Typography component="h2" variant="h4">
        Powered by Trayce
      </Typography>
    </Grid>
  )
}

export default EventTitle;