import { IconButton, InputAdornment, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

import minus_icon from '../../../Assets/Images/Icons/minus.svg'
import plus_icon from '../../../Assets/Images/Icons/plus.svg'

const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: "rgba(174, 201, 233, 0.06) !important",
        backdropFilter: "blur(32px) !important",
        width: "100%",
        borderRadius: 8,
        '& input': {
            fontSize: "16px",
            fontFamily: "MetroSans-Bold",
            fontWeight: "700",
            padding: "0 24px",
            color: "white !important"
        },
        '& input:disabled': {
            color: "white !important"
        },
        '& .MuiOutlinedInput-input.Mui-disabled': {
            textFillColor: "white !important"
        },
        "& input::placeholder": {
            color: "#B8CBEE"
        },
        "& button": {
            color: 'white'
        },
        "& button:disabled": {
            opacity: .4
        },
        '& textarea': {
            fontSize: "16px",
            fontFamily: "MetroSans-Regular",
            fontWeight: "400",
            padding: "0 12px",
            color: "white"
        },
        "& textarea::placeholder": {
            color: "#B8CBEE"
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: "rgba(255, 255, 255, 0.1)"
        },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: "rgba(255, 255, 255, 0.2)"
        },
        '& label.Mui-focused': {
            color: '#9DC8CF'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, .5)',
            border: "1px solid"
            // boxShadow: "0 0 0 3pt rgba(255, 255, 255, 0.2)"
        },
        '& .MuiOutlinedInput-root input': {
            height: "60px",
            "@media screen and (max-width: 1440px)": {
                height: "45px"
            },
            "@media screen and (max-width: 1280px)": {
                height: "40px"
            },
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            fontSize: "14px",
            backgroundColor: "rgba(174, 201, 233, 0.06) !important",
            backdropFilter: "blur(32px) !important",
        },
        '& .MuiFormHelperText-root.Mui-error': {
            margin: 0,
            marginTop: 5,
        }
    }
}));

const Input = (props) => {
    const { 
        placeholder,
        value,
        onChange,
        disabled = false,
        error,
        endAdornment,
        startAdornment,
        multiline = false,
        rows = 7,
        handleAdornment
    } = props

    const material = useStyles()

    return (
        <TextField
            classes={material}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows={rows}
            multiline={multiline}
            disabled={disabled}
            error={!!error}
            variant="outlined"
            InputProps={{
                startAdornment: startAdornment && (
                    <InputAdornment position='start' style={{ width: "fit-content", marginRight: "10px" }}>
                        <IconButton 
                            onClick={() => handleAdornment("minus")}
                            disabled={value - 1 === 0}
                        >
                            <img src={minus_icon} alt="minus"/>
                        </IconButton>
                    </InputAdornment>
                ),
                endAdornment: endAdornment && (
                    <InputAdornment position='end' style={{ width: "fit-content", marginRight: "10px" }}>
                        <IconButton 
                            onClick={() => handleAdornment("plus")}
                            disabled={value + 1 > 100}
                        >
                            <img src={plus_icon} alt="plus"/>
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    )
}

export default Input