import React from 'react'
import classes from './Header.module.css'

const Header = (props) => {
    const { children, variant } = props

    return (
        <>
            {variant === "h1" && <h1 className={classes.h1}>{children}</h1>}
            {variant === "h2" && <h2 className={classes.h2}>{children}</h2>}
            {variant === "h3" && <h3 className={classes.h3}>{children}</h3>}
        </>
    )
}

export default Header