import React from "react";
import CustomButton from "../../UI/Button/CustomButton/CustomButton";
import Card from "../../UI/Card/Card";
import Input from "../../UI/Form/Input";
import Header from "../../UI/Text/Header/Header";
import Text from "../../UI/Text/Text/Text";
import classes from "./Minting.module.css";

const Minting = (props) => {
  const {
    busdApproved,
    busdBalance,
    handleClick,
    count,
    handleCount,
    handleInputCount,
    total,
    discount,
    currency,
    isLoading,
  } = props;

  return (
    <div className={classes.main}>
      <Header variant="h3">Minting</Header>
      <Card className={classes.bigCard}>
        {/* <div className={classes.limit}>
                    <p>4,257</p>
                    <p>&nbsp;/ 10,000</p>
                </div> */}
        <Text variant="label">NFTs Minted</Text>
        <div className={classes.fields}>
          <div className={classes.field}>
            <Text variant="label">1 NFT</Text>
            <Text variant="p1">10 BUSD</Text>
          </div>
          <div className={classes.field}>
            <Text variant="label">10 NFT</Text>
            <Text variant="p1">90 BUSD (10% Off)</Text>
          </div>
          <div className={classes.field}>
            <Text variant="label">50 NFT</Text>
            <Text variant="p1">425 BUSD (15% Off)</Text>
          </div>
          <div className={classes.field}>
            <Text variant="label">100 NFT</Text>
            <Text variant="p1">800 BUSD (20% Off)</Text>
          </div>
        </div>
        <Input
          startAdornment={true}
          endAdornment={true}
          value={count}
          onChange={handleInputCount}
          handleAdornment={handleCount}
        />
        <Text variant="label" className={classes.afterInput}>
          Mint up to 100 NFTs at a time
        </Text>
        <div className={classes.result}>
          <div className={classes.resultLevel}>
            <span>
              {count} x {currency} BUSD
            </span>
            <Text variant="label">Excluding gas fee</Text>
          </div>
          <div className={classes.resultLevel}>
            <div className={classes.price}>
              <Text variant="p1">{total} BUSD</Text>
              {discount != 0 && (
                <div className={classes.discount}>
                  <label>{discount}% Discount</label>
                </div>
              )}
            </div>
            <Text variant="label">Price</Text>
          </div>
          <div className={classes.resultLevel}>
            <span>{busdBalance} BUSD</span>
            <Text variant="label">Your Balance</Text>
          </div>
        </div>
        <CustomButton
          onClick={
            busdApproved
              ? () => handleClick("BUY")
              : () => handleClick("APPROVE")
          }
          disabled={isLoading}
        >
          {busdApproved ? "MINT" : "Approve"}
        </CustomButton>
        <div className={classes.reward}>
          <div className={classes.dopCard}>
            <Text variant="p1">257</Text>
            <Text variant="label">Total № of Tickets you Minted</Text>
          </div>
          {/* <CustomButton>Claim Rewards</CustomButton> */}
        </div>
      </Card>
    </div>
  );
};

export default Minting;
