import { Button, IconButton } from '@mui/material'
import React from 'react'
import CustomButton from '../../UI/Button/CustomButton/CustomButton'
import Overflow from '../../UI/Overflow/Overflow'
import classes from './ConnectWallet.module.css'
import metamask from '../../../Assets/Images/metamask.png'
import wallet from '../../../Assets/Images/wallet.png'
import CloseIcon from '../../UI/Icons/CloseIcon'
import Text from '../../UI/Text/Text/Text'

const ConnectWallet = (props) => {
    const { onClose } = props

    return (
        <Overflow>
            <div className={classes.main}>
                <div className={classes.header}>
                    <Text variant="p1">Connect Wallet</Text>
                    <IconButton onClick={onClose}> 
                        <CloseIcon color={"white"}/>
                    </IconButton>
                </div>
                <div className={classes.content}>
                    <Button className={classes.button}>
                        <img src={metamask} alt="metamask"/>
                        <p>Metamask</p>
                    </Button>
                    <Button className={classes.button}>
                        <img src={wallet} alt="metamask"/>
                        <p>WalletConnect</p>
                    </Button>
                </div>
                <div className={classes.submit}>
                    <CustomButton>Connect</CustomButton>
                </div>
            </div>
        </Overflow>
    )
}

export default ConnectWallet