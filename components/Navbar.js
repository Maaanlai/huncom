import { AppBar, Button, Toolbar, createTheme } from "@mui/material";
import React from 'react';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import { Shadows } from "@mui/material";
import Link from 'next/link'

const pages = ["Instruments", "Institutions", "Teachers"]
const settings = ["Login"]

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

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };



    return (
        <div>
        <AppBar position="static" >
            <Container maxWidth="xl" color="primary">
                <Toolbar disableGutters>
                    <LogoDevIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            <MenuItem key="Instruments" onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" href="/instruments">Instruments</Typography>
                            </MenuItem>
                            <MenuItem key="Institutions" onClick={handleCloseNavMenu}>
                                <Typography textAlign="center" href="/institutions">Institutions</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <LogoDevIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        <Button
                            key="Instruments"
                            onClick={handleCloseNavMenu}
                            href="/Instruments"
                            sx={{ my: 2, color: "white", display: "block" }}
                        >
                            Instruments
                        </Button>
                        <Button
                            key="Institutions"
                            onClick={handleCloseNavMenu}
                            href="/institutions"
                            sx={{ my: 2, color: "white", display: "block" }}
                        >
                            Institutions
                        </Button>

                        <Button
                            key="Teachers"
                            onClick={handleCloseNavMenu}
                            href="/teachers"
                            sx={{ my: 2, color: "white", display: "block" }}
                        >
                            Teachers
                        </Button>

                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Button variant="contained" href="/login">
                            Нэвтрэх
                        </Button>
                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
        </div>

    )
}

export default Navbar;