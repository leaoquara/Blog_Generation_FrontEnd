import React from 'react';
import LinkedIn from '@material-ui/icons/LinkedIn';
import { GitHub } from '@material-ui/icons';
import { Grid, Typography} from '@material-ui/core';
import { Box } from "@mui/material";
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#C4E538", height: "72px" }} className='social'>
                        <Box paddingTop={1} display="none" alignItems="center" justifyContent="center">
                            <Typography variant="h6" align="center" gutterBottom style={{ color: "#000000" }}></Typography>
                        </Box>
                        <Box className='social'>
                            <a href="https://www.linkedin.com/in/leaoquara/" target="_blank">
                                <LinkedIn style={{ fontSize: 50, color: "#000000" }} />
                            </a>
                            <a href="https://github.com/leaoquara" target="_blank">
                                <GitHub style={{ fontSize: 40, color: "#000000" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#ffffff", height: "68px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "#000000" }} >© 2022</Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2" gutterBottom style={{ color: "#000000" }} align="center">Ryan dos Santos da Paixão</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;