import React from 'react';
import { Box, Container, Grid, Typography, Button, Stack, Snackbar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Header from '../../Components/Header/Header';

import './Add.css'
import sizes from '../../Utils/Common/Sizes';
import CardPhotos from '../../Components/CardPhotos/CardPhotos';
import CardDetailInfoToy from '../../Components/CardDetailInfoToy/CardDetailInfoToy';

const AddView = ({ signInSchema, onSubmit, onChangeImage, onDeleteImage, onBack, isNewToy,
    isLoading, mainImage, detailImage1, detailImage2, messageInfo, showMessageInfo, onCloseMessage }) => {


    let topPageInfo = null;
    let topButtonDonate = null;
    if (isNewToy) {
        topPageInfo = (
            <>
                <Typography variant="h1" >
                    Cadastrar novo brinquedo
                </Typography>
            </>
        );
    } else {
        topPageInfo = (
            <>
                <Typography variant="h1" >
                    Bloco de Silicone
                </Typography>
                <CheckCircleOutlineIcon color="success" sx={{ fontSize: sizes.FontSizeMD }} />
                <Typography variant="body1" >
                    Disponível para doação
                </Typography>
            </>
        );
        topButtonDonate = (
            <Button variant='disabled' className='buttonClass'>Marcar como doado</Button>
        );
    }
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
                        <Stack spacing={1} direction="row" alignItems="center" onClick={onBack} sx={{ cursor: 'pointer' }}>
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
                                    {topPageInfo}
                                </Stack>
                            </Grid>
                            <Grid item md={4} className="buttonDonateDiv">
                                {topButtonDonate}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={12} lg={5} className="titlePage">
                        <CardPhotos
                            onChangeImage={onChangeImage}
                            onDeleteImage={onDeleteImage}
                            isLoading={isLoading}
                            mainImage={mainImage} detailImage1={detailImage1} detailImage2={detailImage2}
                        />
                    </Grid>
                    <Grid item md={12} lg={7} className="titlePage">
                        <CardDetailInfoToy onSubmit={onSubmit} signInSchema={signInSchema} isLoading={isLoading} />
                    </Grid>
                    <Snackbar
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                        open={showMessageInfo}
                        autoHideDuration={6000}
                        onClose={onCloseMessage}
                    >
                        {messageInfo}
                    </Snackbar>
                </Grid>
            </Box>
        </Container>
    );
};

export default AddView;