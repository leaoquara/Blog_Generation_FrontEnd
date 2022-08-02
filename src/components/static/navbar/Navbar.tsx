import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from "@mui/material";
import './Navbar.css';

function Navbar() {
  return (
    <>
        <AppBar position="static">
            <Toolbar variant="dense" className="nav-main">
                <Box style={{ cursor: "pointer" }}>
                    <Typography variant="h5" color="inherit" >
                        Blog Pessoal
                    </Typography>
                </Box>

                <Box className="nav-tool">
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit" >
                            <a>
                                Home
                            </a>
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit" >
                            <a>
                                Postagens
                            </a>
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit" >
                            <a>
                                Temas
                            </a>
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit" >
                            <a>
                                Novo tema
                            </a>
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit" > 
                            <a>
                                Logout
                            </a>
                        </Typography>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    </>
  );
}

export default Navbar;