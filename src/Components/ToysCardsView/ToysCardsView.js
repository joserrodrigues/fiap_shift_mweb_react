import React from 'react';
import { Grid, Typography, CircularProgress } from '@mui/material';
import { Card, CardContent, CardMedia } from '@mui/material';
import CardInfo from '../CardInfo/CardInfo'
import './ToysCardsView.css'

const ToysCardsView = ({loading, arrayToys, goToPage }) => {

    let cards = [];
    console.log(loading);
    if(loading){
        cards.push(
            <Grid key={1} item lg={12} xl={12} className="itemClass">
                <CircularProgress />
            </Grid>

        )
    } else if (arrayToys) {
        arrayToys.toys.forEach(toy => {
            cards.push(
                <Grid key={toy._id} item sm={12} md={6} lg={2} xl={2} className="itemClass" onClick={() => goToPage(toy)}>
                    <Card className='cardClass'>
                        <CardMedia
                            component="img"
                            height="140"
                            src={toy.mainImage}
                            alt={toy.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="body2" component="div" className='toysTitleCard'>
                                {toy.name}
                            </Typography>
                            <CardInfo />
                        </CardContent>
                    </Card>
                </Grid>
            )
        });    
    }
    return (
        <Grid item lg={12} >
            <Grid
                container
                spacing={3}
                alignItems="center"
            >
            {cards}
            </Grid>
        </Grid>
    );
};

export default ToysCardsView;