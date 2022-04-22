import React from 'react'
import { cx } from '../../../../Utils/classnames'
import classes from './Text.module.css'

const Text = (props) => {
    const { children, variant, className } = props

    return (
        <>
            {variant === "p1" && <p className={cx(classes.p1, className)}>{children}</p>}
            {variant === "p2" && <p className={cx(classes.p2, className)}>{children}</p>}
            {variant === "p2_italic" && <p className={cx(classes.p2_italic, className)}>{children}</p>}
            {variant === "action" && <p className={cx(classes.action, className)}>{children}</p>}
            {variant === "label" && <label className={cx(classes.label, className)}>{children}</label>}
        </>
    )
}

export default Text