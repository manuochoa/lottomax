import React from 'react'
import classes from './Timer.module.css'
import plumb from '../../../Assets/Images/plumb.png'
import { useCountdown } from '../../../Hooks/useCountdown';
import Text from '../../UI/Text/Text/Text';

const Timer = (props) => {
    const { date } = props

    const [days, hours, minutes, seconds] = useCountdown(date);

    return (
        <div className={classes.main}>
            <div className={classes.img}>
                <img src={plumb} alt="bg"/>
            </div>
            <div className={classes.time}>
                <p>{days >= 10 ? days : ("0" + days)}</p>
                <label>:</label>
                <p>{hours >= 10 ? hours : ("0" + hours)}</p>
                <label>:</label>
                <p>{minutes >= 10 ? minutes : ("0" + minutes)}</p>
            </div>
            <div className={classes.text}>
                <Text variant="label">Days/Hours/Minutes</Text>
            </div>
        </div>
    )
}

export default Timer