import { Button, IconButton } from "@mui/material";
import React from "react";
import CustomButton from "../../UI/Button/CustomButton/CustomButton";
import Overflow from "../../UI/Overflow/Overflow";
import classes from "./ConnectWallet.module.css";
import metamask from "../../../Assets/Images/metamask.png";
import wallet from "../../../Assets/Images/wallet.png";
import CloseIcon from "../../UI/Icons/CloseIcon";
import Text from "../../UI/Text/Text/Text";
import { useDispatch } from "react-redux";

const ConnectWallet = (props) => {
  const { onClose, connectMetamask, connectWalletConnect } = props;
  const dispatch = useDispatch();

  return (
    <Overflow>
      <div className={classes.main}>
        <div className={classes.header}>
          <Text variant="p1">Connect Wallet</Text>
          <IconButton onClick={onClose}>
            <CloseIcon color={"white"} />
          </IconButton>
        </div>
        <div className={classes.content}>
          <Button
            onClick={() => dispatch(connectMetamask())}
            className={classes.button}
          >
            <img src={metamask} alt="metamask" />
            <p>Metamask</p>
          </Button>
          <Button
            onClick={() => dispatch(connectWalletConnect())}
            className={classes.button}
          >
            <img src={wallet} alt="wallet connect" />
            <p>WalletConnect</p>
          </Button>
        </div>
      </div>
    </Overflow>
  );
};

export default ConnectWallet;
