import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import classes from './Footer.module.css'

const Footer = (props) => {
    const location = useLocation()

    return (
        <>
            {location.pathname != "/mint" &&
            <div className={classes.main}>
                <NavLink to="/" className={(navData) => (navData.isActive ? classes.active : '')}></NavLink>
                <NavLink to="/about_us" className={(navData) => (navData.isActive ? classes.active : '')}></NavLink>
                <NavLink to="/how_it_works" className={(navData) => (navData.isActive ? classes.active : '')}></NavLink>
                <NavLink to="/mint" className={(navData) => (navData.isActive ? classes.active : '')}></NavLink>
                <NavLink to="/contact_us" className={(navData) => (navData.isActive ? classes.active : '')}></NavLink>
            </div>}
        </>
    )
}

export default Footer