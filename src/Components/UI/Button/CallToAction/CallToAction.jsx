import React from 'react'
import classes from './CallToAction.module.css'
import arrow from '../../../../Assets/Images/Icons/right_arrow.png'
import Text from '../../Text/Text/Text'

const CallToAction = (props) => {
    const { text, onClick } = props

    return (
        <button className={classes.main} onClick={onClick}>
            <img src={arrow} alt="arrow"/>
            <Text variant="action">
                {text}
            </Text>
        </button>
    )
}

export default CallToAction