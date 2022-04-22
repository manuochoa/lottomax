import React, { useState } from 'react'
import classes from './Slider.module.css'
import { IconButton } from '@mui/material';
import ArrowLeft from '../../UI/Icons/ArrowLeft';
import ArrowRight from '../../UI/Icons/ArrowRight';
import { cx } from '../../../Utils/classnames';
import { CSSTransition } from 'react-transition-group';

const CustomSlider = (props) => {
    const { images } = props
    const [activeElement, setActiveElement] = useState(0)

    const handleElement = (direction) => {
        if(direction === "left" && activeElement - 1 >= 0){
            setActiveElement(activeElement - 1)
        }else if (direction === "right" && activeElement + 1 != images.length) {
            setActiveElement(activeElement + 1)
        }
    }

    return (
        <div className={classes.main}>
            <IconButton 
                className={cx(classes.button, classes.leftBut)}
                disabled={activeElement - 1 < 0}
                onClick={() => handleElement("left")}
            >
                <ArrowLeft/>
            </IconButton>
            <CSSTransition
                key={activeElement}
                timeout={{ enter: 800, exit: 1400 }}
                // appear={true}
                // classNames={'fade'}
            >
                <img src={images[activeElement]} alt="nft"/>
            </CSSTransition>
            <IconButton 
                className={cx(classes.button, classes.rightBut)}
                disabled={activeElement + 1 === images.length}
                onClick={() => handleElement("right")}
            >
                <ArrowRight/>
            </IconButton>
            <div className={classes.dots}>
                {images.map((el, index) => (
                    <div 
                        key={el + index}
                        onClick={() => setActiveElement(index)}
                        className={cx(classes.dot, activeElement === index ? classes.active : "")}
                    />
                ))}
            </div>
        </div>
    )
}

export default CustomSlider