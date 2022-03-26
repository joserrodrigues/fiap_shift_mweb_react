import * as React from 'react';
import './Home.css'
import { Box, Container, CircularProgress, Grid, Typography } from '@mui/material';

export default function HomeView({ loading, arrayToys }) {

    let name = "";
    let infoBox = [];

    if (loading) {
        infoBox.push(
            <Grid key={1} item lg={12} xl={12} className="itemClass">
                <CircularProgress />
            </Grid>

        )
    } else if (arrayToys) {
        arrayToys.toys.forEach(toy => {
            infoBox.push(
                <Grid key={toy._id} item lg={12} xl={12} className="itemClass">
                    <Typography gutterBottom variant="body" className="text">
                        Info {toy.name}
                    </Typography>
                </Grid>
            )
        });
    }
    return (
        <Container fixed className="container" maxWidth="lg">
            <Box className="contentBox">
                <Grid
                    container
                    spacing={0}
                    direction="row">
                    <Grid item lg={12} xl={12} >
                        <Typography gutterBottom variant="h1" className="text">
                            Base de Brinquedos {name}
                        </Typography>
                    </Grid>
                    {infoBox}

                </Grid>
            </Box>
        </Container>
    );
}