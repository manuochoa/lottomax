import React from 'react'
import { motion } from 'framer-motion'
import classes from './AnimatedPage.module.css'

const AnimatedPage = (props) => {
    const { children } = props

    const animations = {
        initial: { opacity: 0, x: 1000 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -1000 }
    }

    return (
        <motion.div
            variants={animations}
            initial="initial"
            exit="exit"
            animate="animate"
            transition={{ type: "keyframes", duration: 1 }}
            className={classes.main}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedPage