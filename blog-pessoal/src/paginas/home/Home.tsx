import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#ce55e0" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "gray", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "gray", fontWeight: "bold" }}>Expresse aqui os seus pensamentos e opiniões!!! </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#a30363", color: "white" }}>VER POSTAGENS</Button>
                    </Box>
                </Grid>
                <Grid item xs={6}  >
                    <img src="https://i.imgur.com/eh5dBIG.jpeg" alt="Imagem do desenho de um cinema com poltronas vermelhas e uma tela na parede" width="400px" height="300px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "gray" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;