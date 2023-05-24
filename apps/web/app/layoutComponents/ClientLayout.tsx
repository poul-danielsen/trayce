"use client";

import { Box, Container, Grid, Stack } from "@mui/material";
import { MuiSetup } from "./MuiSetup";

const ClientLayout = ({children}: {children: React.ReactNode}) => {
    
	return (
		<MuiSetup>
			<Container component="main" maxWidth="sm">
				<Box 
					sx={{
						margin: 2,
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
				<Grid container spacing={4}>
					{children}
				</Grid>
				</Box>
			</Container>
		</MuiSetup>
	)
}

export default ClientLayout;