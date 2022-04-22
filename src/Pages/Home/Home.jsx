import React from 'react'
import MaxWidthContainer from '../../Components/UI/Container/MaxWidthContainer/MaxWidthContainer'
import PaddingContainer from '../../Components/UI/Container/PaddingContainer/PaddingContainer'
import Header from '../../Components/UI/Text/Header/Header'
import Text from '../../Components/UI/Text/Text/Text'
import classes from './Home.module.css'
import star_with_line from '../../Assets/Images/star_with_line.svg'
import CallToAction from '../../Components/UI/Button/CallToAction/CallToAction'

import { useNavigate } from 'react-router-dom'

import diamond_gif from '../../Assets/Gif/diamond.gif'

const Home = () => {

    const navigate = useNavigate()

    const onClick = () => {
        navigate('/mint')
    }

    return (
        <PaddingContainer>
            <MaxWidthContainer className={classes.main}>
                <div className={classes.side}>
                    <Text variant="p2_italic" className={classes.preHeader}>
                        Exclusive Diamond Holder Club Presents
                    </Text>
                    <Header variant="h1">
                        LottoMax
                    </Header>
                    <div className={classes.subHeader}>
                        <img src={star_with_line} alt="star"/>
                        <Header variant="h3">
                            The Premiere NFT Lottery
                        </Header>
                    </div>
                    <Text variant="p2" className={classes.text}>
                        LottoMax is the premiere NFT lottery on the Binance Smart Chain. 
                        With massive rewards, unmatched odds, and high accessibility, 
                        LottoMax is setting a new standard in the crypto and lottery space alike.
                        Presented by the Exclusive Diamond Holders Club. 
                    </Text>
                    <div className={classes.diamondMobile}>
                        <img src={diamond_gif} alt="diamond"/>
                    </div>
                    <CallToAction text="Mint Now" onClick={onClick}/>
                </div>
                <div className={classes.diamond}>
                    <img src={diamond_gif} alt="diamond"/>
                </div>
            </MaxWidthContainer>
        </PaddingContainer>
    )
}

export default Home