import { Drawer, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import CloseIcon from '../../../UI/Icons/CloseIcon';
import MenuIcon from '../../../UI/Icons/MenuIcon';
import classes from './Burger.module.css'

const useStyles = makeStyles((theme) => ({
    paper: {
        width: "75%",
        background: "linear-gradient(253.61deg, #171627 -6.41%, #212536 105.68%)",
        backdropFilter: "blur(16px)",
        padding: "30px",
        paddingRight: "20px",
        paddingTop: "20px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        '& button': {
            marginLeft: "auto"
        },
    }
}));

const Burger = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    const anchor = 'right'

    const material = useStyles()

    return (
        <div className={classes.main}>
            <div className={classes.burger}>
                <IconButton 
                    onClick={handleOpen}
                >
                    <MenuIcon/>
                </IconButton>
            </div>
            <Drawer 
                anchor={anchor} 
                open={isOpen} 
                onClose={handleOpen}
                classes={material}
            >
                <IconButton 
                    onClick={handleOpen}
                >
                    <CloseIcon color={"white"}/>
                </IconButton>
                <div className={classes.links}>
                    <NavLink onClick={handleOpen} to="/" className={(navData) => (navData.isActive ? classes.active : '')}>Home</NavLink>
                    <NavLink onClick={handleOpen} to="/about_us" className={(navData) => (navData.isActive ? classes.active : '')}>About us</NavLink>
                    <NavLink onClick={handleOpen} to="/how_it_works" className={(navData) => (navData.isActive ? classes.active : '')}>How it Works</NavLink>
                    <NavLink onClick={handleOpen} to="/mint" className={(navData) => (navData.isActive ? classes.active : '')}>Mint</NavLink>
                    <NavLink onClick={handleOpen} to="/contact_us" className={(navData) => (navData.isActive ? classes.active : '')}>Contact Us</NavLink>
                </div>
            </Drawer>
        </div>
    )
}

export default Burger