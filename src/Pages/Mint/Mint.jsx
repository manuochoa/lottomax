import React from 'react'
import PaddingContainer from '../../Components/UI/Container/PaddingContainer/PaddingContainer'
import classes from './Mint.module.css'

import diamond_light from '../../Assets/Images/diamond_light.png'
import Card from '../../Components/UI/Card/Card'
import Text from '../../Components/UI/Text/Text/Text'
import Header from '../../Components/UI/Text/Header/Header'
import CustomSlider from '../../Components/Common/Slider/Slider'
import Lottery from '../../Components/Mint/Lottery/Lottery'
import Minting from '../../Components/Mint/Minting/Minting'
import Stats from '../../Components/Mint/Stats/Stats'

const Mint = (props) => {
    const {
        currency,
        count,
        handleCount,
        date,
        nfts,
        total,
        discount,
        handleInputCount
    } = props

    return (
            <PaddingContainer className={classes.main}>
                <div className={classes.header}>
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
                    <div className={classes.logoContainer}>
                        <img src={diamond_light} alt="logo"/>
                    </div>
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
                </div>
                <div className={classes.statsMobile}>
                    <Stats/>
                </div>
                <div className={classes.content}>
                    <div className={classes.side}>
                        <Minting
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
                            <CustomSlider images={nfts}/>
                        </Card>
                    </div>
                    <div className={classes.side}>
                       <Lottery date={date}/>
                    </div>
                </div>
                <div className={classes.tablet}>
                    <div className={classes.mobileContainer}>
                        <div className={classes.side}>
                            <Minting
                                count={count}
                                handleCount={handleCount}
                                handleInputCount={handleInputCount}
                                total={total}
                                discount={discount}
                                currency={currency}
                            />
                        </div>
                        <div className={classes.side}>
                            <Lottery date={date}/>
                        </div>
                    </div>
                    <div className={classes.center}>
                        <Header variant="h3">NFTs Preview</Header>
                        <Card className={classes.bigCard}>
                            <CustomSlider images={nfts}/>
                        </Card>
                    </div>
                </div>
                <div className={classes.mobile}>
                    <div className={classes.mobileContainer}>
                        <div className={classes.side}>
                            <Lottery date={date}/>
                            <Minting
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
                                <CustomSlider images={nfts}/>
                            </Card>
                        </div>
                        
                            
                        
                    </div>
                </div>
            </PaddingContainer>
    )
}

export default Mint