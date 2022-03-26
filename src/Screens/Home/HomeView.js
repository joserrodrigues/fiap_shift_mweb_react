import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function HomeView({ count }) {

    return (
        <Container maxWidth="xl">
            <Typography variant="h1">Contador = {count} </Typography>
        </Container>
    );
}