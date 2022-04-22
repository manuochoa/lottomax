import React from 'react'
import MaxWidthContainer from '../../Components/UI/Container/MaxWidthContainer/MaxWidthContainer'
import PaddingContainer from '../../Components/UI/Container/PaddingContainer/PaddingContainer'
import classes from './AboutUs.module.css'
import diamonds from '../../Assets/Images/diamonds.png'
import Header from '../../Components/UI/Text/Header/Header'
import Text from '../../Components/UI/Text/Text/Text'

import line from '../../Assets/Images/line.svg'
import CallToAction from '../../Components/UI/Button/CallToAction/CallToAction'
import AnimatedPage from '../../Components/Common/AnimatedPage/AnimatedPage'
import { useNavigate } from 'react-router-dom'

const AboutUs = (props) => {
    const navigate = useNavigate()

    const onClick = () => {
        navigate('/mint')
    }

    return (
        <PaddingContainer>
            <MaxWidthContainer className={classes.main}>
                <div className={classes.diamonds}>
                    <img src={diamonds} alt="diamonds"/>
                </div>
                <div className={classes.side}>
                    <Header variant="h2">
                        What is LottoMax?
                    </Header>
                    <div className={classes.content}>
                        <Text variant="p2_italic">
                            LottoMax is presented by the Exclusive Diamond Holders Club (EDHC).
                        </Text>
                        <Text variant="p2">
                            The Exclusive Diamond Holders Club is a prestigious private community of highly experienced crypto experts, whale investors, influencers, and talented developers and designers.
                        </Text>
                        <Text variant="p2">
                            Originally built as a safe haven for project owners and service providers to find each other and network, EDHC grew into a blooming community of investors (who gain access to a variety of exclusive private sales). We provide a variety of services, meant to assist projects and project owners market/advertise, raise funds, and find verified talent.
                        </Text>
                        <Text variant="p2">
                            The recruitment process for membership into the EDHC is very selective, as we only seek to accept those who can contribute to our community. If you think you have what it takes, click here to apply.
                        </Text>
                    </div>
                    <img src={line} alt="line" className={classes.line}/>
                    <CallToAction text={"Apply now"} onClick={onClick}/>
                </div>
            </MaxWidthContainer>
        </PaddingContainer>
    )
}

export default AboutUs