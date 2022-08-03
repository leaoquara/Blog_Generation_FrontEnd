import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { Box } from "@mui/material";
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import './Home.css';

function Home() {
    return (
      <>
      <Grid container direction="row" justifyContent="center" alignItems="center" className='box'>
          <Grid alignItems="center" item xs={6}>
              <Box paddingX={20} >
                  <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='title'>Seja bem vindo(a)!</Typography>
                  <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='title'>expresse aqui os seus pensamentos e opiniões!</Typography>
              </Box>
              <Box display="flex" justifyContent="center">
                  <Box marginRight={1}>
                  </Box>
                  <Button variant="outlined" className='button'>Ver Postagens</Button>
              </Box>
          </Grid>
          <Grid item xs={6} >
              <img src="https://i.imgur.com/6ALCPyj.png" alt="" width="500px" height="500px" />
          </Grid>
          <Grid xs={12} className='posts'>
            <TabPostagem/>
          </Grid>
      </Grid>
  </>
    );
}

export default Home;