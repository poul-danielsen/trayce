"use client";

import { Grid, Typography } from "@mui/material";

const Title = () => {
  return (
    <Grid item spacing={2} xs={12}>
      <Typography component="h1" variant="h2">
        Trayce
      </Typography>
      <Typography component="h2" variant="h4">
        Contact tracing for events
      </Typography>
    </Grid>
  )
}

export default Title;