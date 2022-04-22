import React from 'react'
import classes from './Stats.module.css'
import Slider from "react-slick";
import Card from '../../UI/Card/Card';
import Text from '../../UI/Text/Text/Text';

const Stats = (props) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        className: classes.main
    };

    return (
        <Slider {...settings}>
            <Card className={classes.smallCard}>
                <Text variant="p1">36.8 M</Text>
                <Text variant="label">Total Prize Pool</Text>
            </Card>
            <Card className={classes.smallCard}>
                <Text variant="p1">100 K</Text>
                <Text variant="label">Jackpot ticket prize pool</Text>
            </Card>
            <Card className={classes.smallCard}>
                <Text variant="p1">674</Text>
                <Text variant="label">Total Tickets</Text>
            </Card>
            <Card className={classes.smallCard}>
                <Text variant="p1">114</Text>
                <Text variant="label">Tickets Awarding 100 BUSD</Text>
            </Card>
            <Card className={classes.smallCard}>
                <Text variant="p1">654</Text>
                <Text variant="label">Tickets Awarding 50 BUSD</Text>
            </Card>
            <Card className={classes.smallCard}>
                <Text variant="p1">1102</Text>
                <Text variant="label">Tickets Awarding 10 BUSD</Text>
            </Card>
        </Slider>
    )
}

export default Stats