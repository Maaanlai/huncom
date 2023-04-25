import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#e3f2fd'
        },
        secondary: {
            main: '#3B82F6'
        }
    }
})

function Copyright() {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Link color="primary" href="/" >
                    {'© '}
                    Crabs
                    {' '}
                    {new Date().getFullYear()}
                </Link>
            </ThemeProvider>
        </React.Fragment>
    );
}

const iconStyle = {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'primary',
    mr: 1,
    borderRadius: 5,
    '&:hover': {
        bgcolor: 'primary.dark',
    },
};

const LANGUAGES = [
    {
        code: 'en-US',
        name: 'English',
    },
    {
        code: 'mn-MN',
        name: 'Монгол',
    },
];

export default function Footer() {
    return (
        <Typography
            component="footer"
            sx={{ display: 'flex', bgcolor: '#3B82F6' }}
        >
            <Container sx={{ my: 8, display: 'flex' }}>
                <Grid container spacing={5}>
                    <Grid item xs={6} sm={4} md={3}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-end"
                            spacing={2}
                            sx={{ height: 120 }}
                        >
                            <Grid item sx={{ display: 'flex' }}>
                                <Box component="a" href="" sx={iconStyle}>
                                    <img
                                        src="/images/fb-logo.png"
                                        alt="Facebook"
                                    />
                                </Box>
                                <Box component="a" href="" sx={iconStyle}>
                                    <img
                                        src="/images/ig-logo.png"
                                        alt="Twitter"
                                    />
                                </Box>
                            </Grid>
                            <Grid item>
                                <Copyright />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="h6" marked="left" gutterBottom color="white">
                            Legal
                        </Typography>
                        <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0,}}>
                            <Box component="li" sx={{ py: 0.5 }}>
                                <Link href="" color="#ffffff" >Terms</Link>
                            </Box>
                            <Box component="li" sx={{ py: 0.5}}>
                                <Link href="" color="#ffffff">Privacy</Link>
                            </Box>
                        </Box>
                    </Grid>
                    {/*<Grid item xs={6} sm={8} md={4} color="white">*/}
                    {/*    <Typography variant="h6" marked="left" gutterBottom>*/}
                    {/*        Language*/}
                    {/*    </Typography>*/}
                    {/*    <ThemeProvider theme={theme}>*/}
                    {/*        <TextField*/}
                    {/*            select*/}
                    {/*            size="medium"*/}
                    {/*            color='primary'*/}
                    {/*            variant="outlined"*/}
                    {/*            SelectProps={{*/}
                    {/*                native: true,*/}
                    {/*            }}*/}
                    {/*            sx={{ mt: 1, width: 150, color: "white"}}*/}
                    {/*        >*/}
                    {/*            {LANGUAGES.map((language) => (*/}
                    {/*                <option value={language.code} key={language.code} color='primary'>*/}
                    {/*                    {language.name}*/}
                    {/*                </option>*/}
                    {/*            ))}*/}
                    {/*        </TextField>*/}
                    {/*    </ThemeProvider>*/}
                    {/*</Grid>*/}
                </Grid>
            </Container>
        </Typography>
    );
}