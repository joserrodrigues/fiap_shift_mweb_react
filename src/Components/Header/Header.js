import React, { useContext } from 'react';
import { InfoContext } from '../../store/InfoContext';
import { Typography, Grid, Stack } from '@mui/material';
import logoImg from '../../Images/Logo.png'
import './Header.css'

import { useGoogleLogout } from 'react-google-login';


const Header = () => {

    const context = useContext(InfoContext);
    let userInitial = context.info[0];

    const onLogoutSuccess = (info) => {
        console.log(info);
        context.onMakeLogout()
    }

    const { signOut } = useGoogleLogout({
        clientId: process.env.REACT_APP_GKEY,
        onLogoutSuccess: onLogoutSuccess,
    });


    return (
        <>
            <Grid
                container
                spacing={3}
                alignItems="center"
                className='gridHeader'
            >
                <Grid item xs={4} md={6} xl={6} className="leftHeader">
                    <img src={logoImg} alt="children" width={'50px'} className="logo Img" />
                </Grid>
                <Grid item xs={8} md={6} xl={6} className="rightHeader">
                    <Stack direction="row" className="rightHeader">
                        <Stack direction="column" className="rightHeader">
                            <Typography variant="h2" >
                                Olá, {context.info}!
                            </Typography>
                            <div className='logoutButton' onClick={() => signOut()}>
                                <Typography variant="minSize" className='logoutButton'>
                                    Logout
                                </Typography>
                            </div>

                        </Stack>

                        <div className='headerUserLogoInfo' onClick={() => context.onChangeInfo('Mudou')}>
                            <Typography variant="h1" className='iconFont' >{userInitial}</Typography>
                        </div>
                    </Stack>

                </Grid>
            </Grid>
        </>
    );
};

export default Header;