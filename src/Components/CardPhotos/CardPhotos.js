import React from 'react';
import { Grid, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ImageCard from '../../Images/imageCard.png'
import PropTypes from 'prop-types';
import './CardPhotos.css'

const CardPhotos = ({ mainImage, detailImage1, detailImage2, onChangeImage }) => {

    const mountCard = (type, buttonIndex) => {

        let classButton = "";
        let classButtonDiv = "";
        if (type === "detail") {
            classButton = "bottomDetailCardButtonPhotosEmpty"
            classButtonDiv = "bottomDetailCardPhotosEmpty"
        } else {
            classButton = "bottomMainCardButtonPhotosEmpty"
            classButtonDiv = "bottomMainCardPhotosEmpty"
        }
        return (
            <Card>
                <CardContent className="">
                    <Grid
                        container
                        spacing={3}
                        alignItems="center"
                    >
                        <Grid item lg={12} className="topCardPhotosEmpty">
                            <img src={ImageCard} alt="children" height='150px' />
                        </Grid>
                        <Grid item lg={12} className={classButtonDiv}>
                            <Button variant='secondary' className={classButton} onClick={() => onChangeImage(buttonIndex)}>Adicionar Foto</Button>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        )
    }
    let mainImageBox = null;
    let detailImage1Box = null;
    let detailImage2Box = null;
    if (mainImage) {
        mainImageBox = (
            <img src={mainImage} width="100%" className="mainImageDetail" alt="Imagem principal do brinquedo" />
        )
    } else {
        mainImageBox = mountCard("main", 1);
    }
    if (detailImage1) {
        detailImage1Box = (
            <img src={detailImage1} width="100%" className="mainImageDetail" alt="Imagem 1 do brinquedo" />
        )
    } else {
        detailImage1Box = mountCard("detail", 2);
    }
    if (detailImage2) {
        detailImage2Box = (
            <img src={detailImage2} width="100%" className="mainImageDetail" alt="Imagem 2 do brinquedo" />
        )
    } else {
        detailImage2Box = mountCard("detail", 3);
    }

    return (
        <Grid
            container
            spacing={3}
            alignItems="center"
            sx={{ marginBottom: '20px' }}
        >
            <Grid item lg={12} className="titlePage">
                {mainImageBox}
            </Grid>
            <Grid item lg={6} className="titlePage">
                {detailImage1Box}
            </Grid>
            <Grid item lg={6} className="titlePage">
                {detailImage2Box}
            </Grid>
        </Grid>
    );
};

CardPhotos.propTypes = {
    mainImage: PropTypes.string,
    detailImage1: PropTypes.string,
    detailImage2: PropTypes.string,
    onChangeImage: PropTypes.func.isRequired,
};

export default CardPhotos;