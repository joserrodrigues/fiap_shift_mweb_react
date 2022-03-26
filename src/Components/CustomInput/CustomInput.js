import { Typography } from '@mui/material';
import React from 'react';
import './CustomInput.css';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Sizes from '../../Utils/Common/Sizes';
import Colors from '../../Utils/Common/Colors';
import PropTypes from 'prop-types';

const BootstrapInput = styled(InputBase)(({ theme, error }) => { 
    
    let borderNormal = '1px solid ' + Colors.NeutralMedium
    let borderFocused = '2px solid ' + Colors.SecondaryMedium
    if (error) {
        borderNormal = '1px solid ' + Colors.Error
        borderFocused = '2px solid ' + Colors.Error
    }

    return ({
        'label + &': {
            marginTop: '18px',
        },
        '& .MuiInputBase-input': {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
            border: borderNormal,
            fontSize: Sizes.FontSizeSM,
            width: '100%',
            padding: '10px 12px',
            transition: theme.transitions.create([
                'border-color',
                'background-color',
                'box-shadow',
            ]),
            '&:focus': {
                border: borderFocused,
            },
        },
    });

});


const CustomInput = ({ label, errorMessage, onChange, defaultValue, placeholder, hasError, type, disabled, value }) => {

    let colorLabel = "";
    if (hasError){
        colorLabel="error";
    }

    return (
        <div className='boxCustomInput'>
            <FormControl variant="standard">
                <InputLabel color="secondary" shrink htmlFor="bootstrap-input" error={hasError}>
                    {label}
                </InputLabel>
                <BootstrapInput
                    defaultValue={defaultValue} 
                    value={value}
                    error={hasError}
                    disabled={disabled}
                    id="bootstrap-input" 
                    size="small"
                    className="customInput"
                    onChange={onChange}
                    placeholder={placeholder}
                    type={type}/>     
                <Typography variant="minSize" color={colorLabel} className="labelMessageCustomInput">{errorMessage}</Typography>
            </FormControl>
        </div>
    );
};

CustomInput.propTypes = {
    label: PropTypes.string,
    errorMessage: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    hasError: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};
export default CustomInput;