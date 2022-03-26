import React from 'react';
import { Box, Button, Grid, Typography, CircularProgress } from '@mui/material';
import childrenImg from '../../Images/Children.png'
import logoImg from '../../Images/Logo.png'
import './Login.css'
import CustomInput from '../../Components/CustomInput/CustomInput';
import { GoogleLogin } from 'react-google-login';


const LoginView = ({ onClickLogin, isLoading, login, password, setLogin, setPassword, connectMessage, responseGoogle }) => {

    let infoMessage = null;
    let info = (<Button variant='primary' onClick={onClickLogin}>Entrar</Button>);
    let buttonGoogle = (
        <div className='buttonGoogleDiv'>
            <GoogleLogin
                clientId={process.env.REACT_APP_GKEY}
                buttonText="Entrar pelo Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                style={{
                    width: 200
                }}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    );
    if (isLoading) {
        info = (
            <div className='boxProgress'>
                <CircularProgress color="primary" size={25} />
            </div>
        )
        buttonGoogle = null;
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
                    {infoMessage}
                    {info}
                    {buttonGoogle}

                </Box>
            </Grid>
        </Grid>
    );
};

export default LoginView;