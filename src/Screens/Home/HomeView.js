import * as React from 'react';
import './Home.css'
import { Box, Container, Grid, Typography } from '@mui/material';
import Header from '../../Components/Header/Header';

import ToysTableView from '../../Components/ToysTableView/ToysTableView';
import ToysCardsView from '../../Components/ToysCardsView/ToysCardsView';
import ToysTopList from '../../Components/ToysTopList/ToysTopList';
import renderIf from 'render-if';

export default function HomeView({ loading, arrayToys, goToPage, info, getDataPage, viewType, onChangeViewType, addToy }) {

    return (
        <Container fixed className="container" maxWidth="lg">
            <Header />
            <Box className="contentBox">
                <Grid
                    container
                    spacing={3}
                    alignItems="center"
                >
                    <Grid item lg={12} xl={12} className="titlePage">
                        <Typography variant="h1" >
                            Base de Brinquedos - {info}
                        </Typography>
                    </Grid>
                    <ToysTopList onChangeView={onChangeViewType} viewType={viewType} addToy={addToy} />

                    <Grid item lg={12} xl={12} >
                        {renderIf(viewType === "cards")(
                            <ToysCardsView loading={loading} arrayToys={arrayToys} goToPage={goToPage} />
                        )}
                        {renderIf(viewType === "table")(
                            <ToysTableView loading={loading} goToPage={goToPage} getDataPage={getDataPage} />
                        )}
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}