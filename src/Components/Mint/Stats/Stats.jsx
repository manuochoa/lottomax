import React from "react";
import classes from "./Stats.module.css";
import Slider from "react-slick";
import Card from "../../UI/Card/Card";
import Text from "../../UI/Text/Text/Text";

const Stats = ({
  totalPayout,
  jackpot,
  smallJackpot,
  entries,
  validTickets,
  pendingRewards,
}) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    className: classes.main,
  };

  return (
    <Slider {...settings}>
      <Card className={classes.smallCard}>
        <Text variant="p1">{totalPayout} BUSD</Text>
        <Text variant="label">Total Prize Delivered</Text>
      </Card>
      <Card className={classes.smallCard}>
        <Text variant="p1">{jackpot} BUSD</Text>
        <Text variant="label">Jackpot prize pool</Text>
      </Card>
      <Card className={classes.smallCard}>
        <Text variant="p1">{smallJackpot} BUSD</Text>
        <Text variant="label">Small prize pool</Text>
      </Card>
      <Card className={classes.smallCard}>
        <Text variant="p1">{entries}</Text>
        <Text variant="label">Total Tickets</Text>
      </Card>
      <Card className={classes.smallCard}>
        <Text variant="p1">{validTickets?.length}</Text>
        <Text variant="label">My tickets</Text>
      </Card>
      <Card className={classes.smallCard}>
        <Text variant="p1">{pendingRewards}</Text>
        <Text variant="label">My pending rewards</Text>
      </Card>
    </Slider>
  );
};

export default Stats;
