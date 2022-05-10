import React, { useState } from "react";
import PaddingContainer from "../../Components/UI/Container/PaddingContainer/PaddingContainer";
import classes from "./Mint.module.css";

import diamond_light from "../../Assets/Images/diamond_light.png";
import diamond from "../../Assets/Gif/diamond.gif";
import Card from "../../Components/UI/Card/Card";
import Text from "../../Components/UI/Text/Text/Text";
import Header from "../../Components/UI/Text/Header/Header";
import CustomSlider from "../../Components/Common/Slider/Slider";
import Lottery from "../../Components/Mint/Lottery/Lottery";
import Minting from "../../Components/Mint/Minting/Minting";
import Stats from "../../Components/Mint/Stats/Stats";
import { useDispatch, useSelector } from "react-redux";
import {
  initAction,
  getUserBalances,
  getContractInfo,
} from "../../Redux/reduxActions";

const Mint = (props) => {
  const {
    currency,
    count,
    handleCount,
    date,
    nfts,
    total,
    discount,
    handleInputCount,
  } = props;
  const dispatch = useDispatch();
  let {
    busdBalance,
    busdApproved,
    validTickets,
    pendingRewards,
    entries,
    jackpot,
    smallJackpot,
    totalPayout,
  } = useSelector((state) => state.common);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (type) => {
    setIsLoading(true);
    let receipt = await dispatch(initAction(type, count));
    if (receipt) {
      console.log(receipt);
      dispatch(getUserBalances());
      dispatch(getContractInfo());
    }
    setIsLoading(false);
  };

  return (
    <PaddingContainer className={classes.main}>
      <div className={classes.header}>
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
        <div className={classes.logoContainer}>
          <div className={classes.svet} />
          <img src={diamond} alt="logo" />
        </div>
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
      </div>
      <div className={classes.statsMobile}>
        <Stats />
      </div>
      <div className={classes.content}>
        <div className={classes.side}>
          <Minting
            isLoading={isLoading}
            busdApproved={busdApproved}
            busdBalance={busdBalance}
            handleClick={handleClick}
            count={count}
            handleCount={handleCount}
            handleInputCount={handleInputCount}
            total={total}
            discount={discount}
            currency={currency}
          />
        </div>
        <div className={classes.center}>
          <Header variant="h3">NFTs Preview</Header>
          <Card className={classes.bigCard}>
            <CustomSlider images={nfts} />
          </Card>
        </div>
        <div className={classes.side}>
          <Lottery
            pendingRewards={pendingRewards}
            handleClick={handleClick}
            date={date}
          />
        </div>
      </div>
      <div className={classes.tablet}>
        <div className={classes.mobileContainer}>
          <div className={classes.side}>
            <Minting
              isLoading={isLoading}
              busdApproved={busdApproved}
              busdBalance={busdBalance}
              handleClick={handleClick}
              count={count}
              handleCount={handleCount}
              handleInputCount={handleInputCount}
              total={total}
              discount={discount}
              currency={currency}
            />
          </div>
          <div className={classes.side}>
            <Lottery
              pendingRewards={pendingRewards}
              handleClick={handleClick}
              date={date}
            />
          </div>
        </div>
        <div className={classes.center}>
          <Header variant="h3">NFTs Preview</Header>
          <Card className={classes.bigCard}>
            <CustomSlider images={nfts} />
          </Card>
        </div>
      </div>
      <div className={classes.mobile}>
        <div className={classes.mobileContainer}>
          <div className={classes.side}>
            <Lottery
              isLoading={isLoading}
              pendingRewards={pendingRewards}
              handleClick={handleClick}
              date={date}
            />
            <Minting
              isLoading={isLoading}
              busdApproved={busdApproved}
              busdBalance={busdBalance}
              handleClick={handleClick}
              count={count}
              handleCount={handleCount}
              handleInputCount={handleInputCount}
              total={total}
              discount={discount}
              currency={currency}
            />
          </div>
          <div className={classes.center}>
            <Header variant="h3">NFTs Preview</Header>
            <Card className={classes.bigCard}>
              <CustomSlider images={nfts} />
            </Card>
          </div>
        </div>
      </div>
    </PaddingContainer>
  );
};

export default Mint;
