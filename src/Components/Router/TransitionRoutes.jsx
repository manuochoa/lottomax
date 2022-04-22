import React, { useEffect, useRef, useState } from 'react'
import { Navigate, Route, useLocation, useNavigate } from 'react-router-dom';
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

const pages = [
    { path: "/", name: "home", order: 0 },
    { path: "/about_us", name: "about_us", order: 1 },
    { path: "/how_it_works", name: "how_it_works", order: 2 },
    { path: "/mint", name: "mint", order: 3 },
    { path: "/contact_us", name: "contact_us", order: 4 },
]

const TransitionRoutes = () => {
    const location = useLocation()

    const navigate = useNavigate()

    const containerRef = useRef()

    const [ts, setTs] = useState(0)

    const [tsY, setTsY] = useState(0)

    const [currentPage, setCurrentPage] = useState(
        pages.find(page => page.path === location.pathname) ?
        pages.find(page => page.path === location.pathname) :
        pages[0]
    )

    const [isOpenConnetWallet, setIsOpenConnectWallet] = useState(false)

    const handleWallet = () => {
        setIsOpenConnectWallet(!isOpenConnetWallet)
    }

    const handleStart = (e) => {
        setTs(e.touches[0].clientX)
        setTsY(e.touches[0].clientY)
    }

    const handleEnd = (e) => {
        let te = e.changedTouches[0].clientX
        let teY = e.changedTouches[0].clientY

        if(ts > te + 5 && tsY >= teY - 450){
            if(currentPage.order + 1 <= pages.length - 1) {
                navigate(`${pages[currentPage.order + 1].path}`)
            }
        }else if(ts < te - 5 && tsY >= teY - 450){
            if(currentPage.order - 1 >= 0) {
                navigate(`${pages[currentPage.order - 1].path}`)
            }
        }
        setTs(0)
    }

    useEffect(() => {
        const el = containerRef.current;
        el.addEventListener("touchstart", handleStart, false);
        el.addEventListener("touchend", handleEnd, false);
        return () => { 
            el.removeEventListener("touchstart", handleStart)
            el.removeEventListener("touchend", handleEnd)
        }
      });

    useEffect(() => {
        setCurrentPage(
            pages.find(page => page.path === location.pathname) ?
            pages.find(page => page.path === location.pathname) :
            pages[0]
        )
    }, [location.pathname])

    return (
        <div className={`wrapper ${currentPage.name}`} ref={containerRef}>
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