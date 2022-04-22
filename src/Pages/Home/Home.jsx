import React, { useEffect, useRef } from 'react'
import MaxWidthContainer from '../../Components/UI/Container/MaxWidthContainer/MaxWidthContainer'
import PaddingContainer from '../../Components/UI/Container/PaddingContainer/PaddingContainer'
import Header from '../../Components/UI/Text/Header/Header'
import Text from '../../Components/UI/Text/Text/Text'
import classes from './Home.module.css'
import star_with_line from '../../Assets/Images/star_with_line.svg'
import CallToAction from '../../Components/UI/Button/CallToAction/CallToAction'

import diamond from '../../Assets/Images/diamond.png'
import { useNavigate } from 'react-router-dom'
import AnimatedPage from '../../Components/Common/AnimatedPage/AnimatedPage'

// import diamond_video from '../../Assets/Video/diamond.webm'

const Home = (props) => {

    const navigate = useNavigate()

    // const diamondRef = useRef()

    const onClick = () => {
        navigate('/mint')
    }

    // useEffect(() => {
    //     if(diamondRef) {
    //         diamondRef.current.setAttribute("autoplay", "");
    //         diamondRef.current.setAttribute("loop", "");
    //         diamondRef.current.setAttribute("playsinline", "");
    //         diamondRef.current.setAttribute("muted", "");
    //     }
    // }, [diamondRef])

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
                    <CallToAction text="Mint Now" onClick={onClick}/>
                </div>
                <div className={classes.diamond}>
                    {/* <video autoPlay loop muted playsInline ref={diamondRef}>
                        <source src={diamond_video} type="video/webm"/>
                    </video> */}
                    <img src={diamond} alt="diamond"/>
                </div>
            </MaxWidthContainer>
        </PaddingContainer>
    )
}

export default Home