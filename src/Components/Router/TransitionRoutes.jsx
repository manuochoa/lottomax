import React, { useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import AboutUs from '../../Pages/AboutUs/AboutUs';
import '../../Assets/Scss/styles.scss';
import Navbar from '../Common/Navbar/Navbar';
import Footer from '../Common/Footer/Footer';
import HowItWorks from '../../Pages/HowItWorks/HowItWorks';
import MintContainer from '../../Pages/Mint/MintContainer';
import ContactUs from '../../Pages/ContactUs/ContactUs';
import ConnectWallet from '../Common/ConnectWallet/ConnectWallet';
import SlideRoutes from 'react-slide-routes';
import AnimatedPage from '../Common/AnimatedPage/AnimatedPage';

const TransitionRoutes = () => {
    const location = useLocation()

    const [isOpenConnetWallet, setIsOpenConnectWallet] = useState(false)

    const handleWallet = () => {
        setIsOpenConnectWallet(!isOpenConnetWallet)
    }

    const setPage = (pathname) => {
        // SET PAGE FOR CSS CLASSES
        let page = null;
        switch (pathname){
            case('/'):
                page = 'home';
                break;
            case('/about_us'):
                page = 'about_us';
                break;
            case('/how_it_works'):
                page = 'how_it_works';
                break;
            case('/mint'):
                page = 'mint';
                break;
            case('/contact_us'):
                page = 'contact_us';
                break;
            default:
                page = 'home';
        }
        return page;
    }

    return (
        <div className={`wrapper ${setPage(location.pathname)}`}>
            <Navbar handleWallet={handleWallet}/>
            {isOpenConnetWallet && <ConnectWallet onClose={handleWallet}/>}
            <AnimatedPage>
                <SlideRoutes duration={1000} timing="ease-in-out">
                    {/* <Routes > */}
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/about_us" element={<AboutUs/>}/>
                        <Route path="/how_it_works" element={<HowItWorks/>}/>
                        <Route path="/mint" element={<MintContainer/>}/>
                        <Route path="/contact_us" element={<ContactUs/>}/>
                        <Route path="*" element={<Navigate to="/"/>}/>
                    {/* </Routes> */}
                </SlideRoutes>
            </AnimatedPage>
            <Footer/>
        </div>
    )
}

export default TransitionRoutes