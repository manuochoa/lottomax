import React from 'react'
import Timer from '../../Common/Timer/Timer'
import CustomButton from '../../UI/Button/CustomButton/CustomButton'
import Card from '../../UI/Card/Card'
import Input from '../../UI/Form/Input'
import Header from '../../UI/Text/Header/Header'
import Text from '../../UI/Text/Text/Text'
import classes from './Lottery.module.css'

const Lottery = (props) => {
    const {
        date
    } = props

    return (
        <div className={classes.main}>
            <Header variant="h3">Lottery</Header>
            <Card className={classes.bigCard}>
                <Timer date={date}/>
                <Text variant="label" className={classes.countdownLabel}>
                    Countdown to lottery draw time
                </Text>
                <div className={classes.dopCard}>
                    <Text variant="p1">257</Text>
                    <Text variant="label">Total № of Tickets you Minted</Text>
                </div>
                <CustomButton>Claim Rewards</CustomButton>
            </Card>
        </div>
    )
}

export default Lottery