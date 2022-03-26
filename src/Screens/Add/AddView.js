import React from 'react';
import { Box, Container, Grid, Typography, Button, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Header from '../../Components/Header/Header';

import './Add.css'
import sizes from '../../Utils/Common/Sizes';
import CardPhotos from '../../Components/CardPhotos/CardPhotos';
import CardDetailInfoToy from '../../Components/CardDetailInfoToy/CardDetailInfoToy';

const AddView = ({ signInSchema, onSubmit, onChangeImage }) => {
    return (
        <Container fixed className="container" maxWidth="lg">
            <Header />
            <Box className="contentBox">
                <Grid
                    container
                    spacing={3}
                    alignItems="center"
                >
                    <Grid item lg={12} xl={12}>
                        <Stack spacing={1} direction="row" alignItems="center">
                            <ArrowBackIcon color="secondary" sx={{ fontSize: sizes.FontSizeMD }} />
                            <Typography variant="body2" color="secondary" className='backText' >
                                Voltar
                            </Typography>
                        </Stack>

                    </Grid>
                    <Grid item lg={12} xl={12} className="titlePage">
                        <Grid
                            container
                            spacing={3}
                            alignItems="center"
                        >
                            <Grid item md={8} className="titlePage">
                                <Stack spacing={1} direction="row" alignItems="center">
                                    <Typography variant="h1" >
                                        Bloco de Silicone
                                    </Typography>
                                    <CheckCircleOutlineIcon color="success" sx={{ fontSize: sizes.FontSizeMD }} />
                                    <Typography variant="body1" >
                                        Disponível para doação
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item md={4} className="buttonDonateDiv">
                                <Button variant='disabled' className='buttonClass'  >Marcar como doado</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={12} lg={5} className="titlePage">
                        <CardPhotos
                            mainImage={"http://diariogaucho.rbsdirect.com.br/imagesrc/17555210.jpg?w=620"}
                            detailImage1={"http://diariogaucho.rbsdirect.com.br/imagesrc/17555210.jpg?w=620"}
                            detailImage2={"http://diariogaucho.rbsdirect.com.br/imagesrc/17555210.jpg?w=620"}
                            onChangeImage={onChangeImage}
                        />
                    </Grid>
                    <Grid item md={12} lg={7} className="titlePage">
                        <CardDetailInfoToy onSubmit={onSubmit} signInSchema={signInSchema} />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AddView;