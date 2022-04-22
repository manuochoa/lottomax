import { Button } from '@mui/material'
import React from 'react'
import classes from './CustomButton.module.css'

const CustomButton = (props) => {
    const { type = "button", children, onClick } = props

    return (
        <Button
            className={classes.main}
            type={type}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

export default CustomButton