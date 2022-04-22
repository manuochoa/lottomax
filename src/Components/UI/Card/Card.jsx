import React from 'react'
import { cx } from '../../../Utils/classnames'
import classes from './Card.module.css'

const Card = (props) => {
    const { className, children } = props

    return (
        <div className={cx(classes.main, className)}>
            {children}
        </div>
    )
}

export default Card