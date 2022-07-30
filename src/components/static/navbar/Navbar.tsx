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
                    <Typography variant="h5" color="inherit" className="title-nav">
                        Blog Pessoal
                    </Typography>
                </Box>

                <Box className="nav-tool">
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit" className="text-nav">
                            <a>
                                Home
                            </a>
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit" className="text-nav">
                            <a>
                                Postagens
                            </a>
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit" className="text-nav">
                            <a>
                                Temas
                            </a>
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit" className="text-nav">
                            <a>
                                Novo tema
                            </a>
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit" className="text-nav"> 
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