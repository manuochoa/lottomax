import React from 'react'
import MaxWidthContainer from '../../Components/UI/Container/MaxWidthContainer/MaxWidthContainer'
import PaddingContainer from '../../Components/UI/Container/PaddingContainer/PaddingContainer'
import classes from './HowItWorks.module.css'

import diamonds from '../../Assets/Images/small_diamonds.png'
import Header from '../../Components/UI/Text/Header/Header'
import Text from '../../Components/UI/Text/Text/Text'
import AnimatedPage from '../../Components/Common/AnimatedPage/AnimatedPage'

const HowItWorks = (props) => {
    return (
        <PaddingContainer>
            <MaxWidthContainer className={classes.main}>
                <div className={classes.side}>
                    <Header variant="h2">
                        How Does It Work?
                    </Header>
                    <div className={classes.text}>
                        <Text variant="p2">
                            The LottoMax NFT Lottery is a blockchain based lottery where each NFT 
                            you mint functions as 1 ticket. 
                            A ticket grants you a chance at winning massive BUSD prizes, 
                            determined by the number of tickets sold (a whopping 75% of all ticket sales go to the prize pool, 
                            with the remainder going to much needed marketing). 
                            More tickets mean better chances at winning BUSD! 
                        </Text>
                        <Text variant="p2">
                            At only 10 BUSD per NFT, 
                            we decided for a low entry point so that everyone can join in. 
                            There is only one jackpot, but there will be dozens (if not hundreds) of
                            winning NFT tickets for more modest amounts.
                        </Text>
                        <Text variant="p2">
                            Every week, we will draw the lottery, 
                            distribute the winnings, 
                            and all minted NFTs will be void. 
                            The process then repeats, and with bigger marketing, 
                            and more sales, the jackpot and winnings will only get bigger! 
                            If the jackpot ticket is not drawn during that week, 
                            the jackpot carries on to the next week.
                        </Text>
                    </div>
                </div>
                <div className={classes.diamonds}>
                    <img src={diamonds} alt="diamonds" />
                </div>
            </MaxWidthContainer>
        </PaddingContainer>
    )
}

export default HowItWorks