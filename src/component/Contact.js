import React, { useState } from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export default function Contact() {


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="sm">
                <CssBaseline />

                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Card variant="outlined" style={{ padding: "20px", borderRadius: " 22px 22px", boxshadow: "0px 0px 39px 6px" }}>
                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            <TextField
                                id="name"
                                margin="normal"
                                type="text"
                                required
                                fullWidth
                                label="Enter a name"
                                variant="standard"
                            />

                            <TextField
                                id="email"
                                margin="normal"
                                required
                                fullWidth
                                label="Enter Your email"
                                variant="standard"
                            />

                            <TextField
                                id="phone"
                                margin="normal"
                                required
                                fullWidth
                                label="Enter Your Phone Number"
                                type="number"
                                variant="standard"
                            />

                            <TextField
                                id="standard-textarea"
                                label="Messaging"
                                fullWidth
                                placeholder="Placeholder"
                                multiline
                                variant="standard"
                            />

                            <Grid >
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                style={{
                                    marginTop: "15px",
                                    color: "white", borderRadius: "22px 22px", padding: "10px 45px", height: "45px",
                                    fontSize: "14px",
                                }}
                            >
                                Contact
                            </Button>
                        </Box>
                    </Card>
                </Box>
            </Container>
        </ThemeProvider>
    );
}