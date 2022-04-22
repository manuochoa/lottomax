import { Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Burger from './Burger/Burger'
import classes from './Navbar.module.css'

const Navbar = (props) => {
    const { handleWallet } = props

    return (
        <div className={classes.main}>
            <div className={classes.side}>
                <h2>LOGO</h2>
                <div className={classes.links}>
                    <NavLink to="/" className={(navData) => (navData.isActive ? classes.active : '')}>Home</NavLink>
                    <NavLink to="/about_us" className={(navData) => (navData.isActive ? classes.active : '')}>About us</NavLink>
                    <NavLink to="/how_it_works" className={(navData) => (navData.isActive ? classes.active : '')}>How it Works</NavLink>
                    <NavLink to="/mint" className={(navData) => (navData.isActive ? classes.active : '')}>Mint</NavLink>
                    <NavLink to="/contact_us" className={(navData) => (navData.isActive ? classes.active : '')}>Contact Us</NavLink>
                </div>
            </div>
            <div className={classes.side}>
                <Button className={classes.walletBut} onClick={handleWallet}>Connect Wallet</Button>
                <div className={classes.burger}>
                    <Burger/>
                </div>
            </div>
           
        </div>
    )
}

export default Navbar