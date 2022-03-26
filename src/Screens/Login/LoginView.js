import React from 'react';
import { Box, Button, Grid, Typography, CircularProgress } from '@mui/material';
import childrenImg from '../../Images/Children.png'
import logoImg from '../../Images/Logo.png'
import './Login.css'
import CustomInput from '../../Components/CustomInput/CustomInput';

const LoginView = ({ onClickLogin, isLoading, login, password, setLogin, setPassword, connectMessage }) => {

    let infoMessage = null;
    let info = (<Button variant='primary' onClick={onClickLogin}>Entrar</Button>);
    if (isLoading) {
        info = (
            <div className='boxProgress'>
                <CircularProgress color="primary" size={25} />
            </div>
        )
    }

    if (connectMessage !== "") {
        infoMessage = (
            <div className='infoErrorMessage'>
                <Typography variant="minSize" color="error">{connectMessage}</Typography>
            </div>
        )
    }
    return (
        <Grid container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
            className='gridClass'>
            <Grid item md={6} sm={6} >
                <Box className='boxImg'>
                    <img src={childrenImg} alt="children" width={'60%'} className="childrenImg" />
                </Box>
            </Grid>
            <Grid item md={6} sm={6}>
                <Box className='boxLogin'>
                    <img src={logoImg} alt="Logo" width={'40px'} className="logo" />
                    <Typography variant="h1">Bem-vindo!</Typography>
                    <CustomInput
                        label="Digite seu e-mail"
                        defaultValue={login}
                        errorMessage=""
                        placeholder="mario@cqb.com.br"
                        hasError={false}
                        value={login}
                        onChange={(event) => setLogin(event.target.value)}
                    />
                    <CustomInput
                        label="Digite sua senha"
                        defaultValue={password}
                        errorMessage=""
                        placeholder="**************"
                        hasError={false}
                        type="password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    {info}
                    {infoMessage}
                </Box>
            </Grid>
        </Grid>
    );
};

export default LoginView;