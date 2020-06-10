import React from 'react'
import { motion } from "framer-motion"

const AnimationNetflix = () => {
  return (
    <motion.div className="netflix-container" variants={variantExit} initial="initial" animate="animated" >
      <motion.svg width="867" height="233" viewBox="0 0 867 233" fill="none" xmlns="http://www.w3.org/2000/svg" variants={variantSlide} initial="initial" animate="animated">
      <motion.g id="N" variants={variantN} initial="initial" animate="animated" >
        <path id="N1-base" className="base" d="M0 232.8L37 227.8V101.6L35.1 0H0V232.8Z" />
        <motion.path id="N1-shadow" d="M0 232.8L37 227.8V101.6L35.1 0H0V232.8Z" fill="url(#N1-shadowFill)" variants={variantNShadow} initial="initial" animate="animated"/>
        <path id="N3-base" className="base" d="M82.6 0H119V218.4L82.6 222.3V0Z" />
        <motion.path id="N3-shadow" d="M82.6 0H119V218.4L82.6 222.3V0Z" fill="url(#N3-shadowFill" variants={variantNShadow} initial="initial" animate="animated"/>
        <path id="N2" className="base" d="M79.2 222.7L119 218.4L35.1 0H0L79.2 222.7Z" />
        <defs>
          <linearGradient id="N1-shadowFill" x1="50%" y1="0%" x2="50%" y2="100%" gradientUnits="userSpaceOnUse">
            <stop className="shadow-start" offset="0%" />
            <stop className="shadow-end" offset="100%" />
          </linearGradient>
          <linearGradient id="N3-shadowFill" x1="50%" y1="100%" x2="50%" y2="0%" gradientUnits="userSpaceOnUse">
            <stop className="shadow-start" offset="0%" />
            <stop className="shadow-end" offset="100%" />
          </linearGradient>
        </defs>
      </motion.g>
      <g id="E" >
        <motion.path id="E1-base" className="base" d="M255.1 171.6V208.2L153.6 215.8V178.5L255.1 171.6Z" variants={variantE1} initial="initial" animate="animated"/>
        <motion.path id="E1-shadow" d="M255.1 171.6V208.2L153.6 215.8V178.5L255.1 171.6Z" fill="url(#E1-shadowFill)" variants={variantEShadow} initial="initial" animate="animated"/>
        <motion.path id="E4" className="base" d="M239.9 85.2V121.2L153.6 121.5V85.6L239.9 85.2Z" variants={variantE4} initial="initial" animate="animated"/>
        <motion.path id="E2-base" className="base" d="M190.1 213.1L153.6 215.8V0H190.1V213.1Z" variants={variantE2} initial="initial" animate="animated" />
        <motion.path id="E2-shadow" d="M190.1 213.1L153.6 215.8V0H190.1V213.1Z" fill="url(#E2-shadowFill)" variants={variantEShadow} initial="initial" animate="animated"/>
        <motion.path id="E3" className="base" d="M255 0H153.6V36.4H255V0Z" variants={variantE3} initial="initial" animate="animated"/>
        <defs>
          <linearGradient id="E1-shadowFill" x1="0%" y1="50%" x2="100%" y2="50%" gradientUnits="objectBoundingBox">
            <stop className="shadow-start" offset="0%" />
            <stop className="shadow-end" offset="100%" />
          </linearGradient>
          <linearGradient id="E2-shadowFill" x1="50%" y1="0%" x2="50%" y2="40%" gradientUnits="userSpaceOnUse">
            <stop className="shadow-start" offset="0%" />
            <stop className="shadow-end" offset="100%" />
          </linearGradient>
        </defs>
      </g>
      <g id="T">
        <motion.path id="T2-base" className="base" d="M317 0V204.6L353.4 203.2V0H317Z" variants={variantT2} initial="initial" animate="animated"/>
        <motion.path id="T2-shadow" d="M317 0V204.6L353.4 203.2V0H317Z" fill="url(#T2-shadowFill)" variants={variantTShadow} initial="initial" animate="animated"/>
        <motion.path id="T1" className="base" d="M391.7 0H278.7V36.4H391.7V0Z" variants={variantT1} initial="initial" animate="animated"/>
        <defs>
          <linearGradient id="T2-shadowFill" x1="50%" y1="0%" x2="50%" y2="100%" gradientUnits="userSpaceOnUse">
            <stop className="shadow-start" offset="0%" />
            <stop className="shadow-end" offset="100%" />
          </linearGradient>
        </defs>
      </g>
      <g id="F">
        <motion.path id="F3" className="base" d="M501 84H415V120H501V84Z" variants={variantF3} initial="initial" animate="animated"/>
        <motion.path id="F2-base" className="base" d="M414.8 0V202.2H451.8V0H414.8Z" variants={variantF2} initial="initial" animate="animated"/>
        <motion.path id="F2-shadow" d="M414.8 0V202.2H451.8V0H414.8Z" fill="url(#F2-shadowFill)" variants={variantFShadow} initial="initial" animate="animated"/>
        <motion.path id="F1" className="base" d="M516.8 0H414.8V36.4H516.8V0Z" variants={variantF1} initial="initial" animate="animated"/>
        <defs>
          <linearGradient id="F2-shadowFill" x1="50%" y1="0%" x2="50%" y2="40%" gradientUnits="userSpaceOnUse">
            <stop className="shadow-start" offset="0%" />
            <stop className="shadow-end" offset="100%" />
          </linearGradient>
        </defs>
      </g>
      <g id="L">
        <motion.path id="L1-base" className="base" d="M540.5 0H576.9V205.9L540.5 204.1V0Z" variants={variantL1} initial="initial" animate="animated"/>
        <motion.path id="L1-shadow" d="M540.5 0H576.9V205.9L540.5 204.1V0Z" fill="url(#L1-shadowFill)" variants={variantLShadow} initial="initial" animate="animated"/>
        <motion.path id="L2" className="base" d="M540.5 167.5L639.5 173.1V209.1L540.5 204.1V167.5Z" variants={variantL2} initial="initial" animate="animated"/>
        <defs>
          <linearGradient id="L1-shadowFill" x1="50%" y1="100%" x2="50%" y2="0%" gradientUnits="userSpaceOnUse">
            <stop className="shadow-start" offset="0%" />
            <stop className="shadow-end" offset="100%" />
          </linearGradient>
        </defs>
      </g>
      <motion.path id="I" variants={variantI} initial="initial" animate="animated" className="base" d="M669.2 0H705.7V214.3L669.2 211.2V0Z" />
      <g id="X">
        <motion.path id="X2-base" className="base" d="M737 0L825.1 227.2L866.8 232.8L776.5 0H737Z" variants={variantX2} initial="initial" animate="animated"/>
        <motion.path id="X2-shadow" d="M737 0L825.1 227.2L866.8 232.8L776.5 0H737Z" fill="url(#X2-shadowFill)" variants={variantXShadow} initial="initial" animate="animated"/>
        <motion.path id="X1" className="base" d="M733.1 216.8L771.5 220.8L866.8 0H826.7L733.1 216.8Z" variants={variantX1} initial="initial" animate="animated"/>
        <defs>
          <linearGradient id="X2-shadowFill" x1="0%" y1="10%" x2="80%" y2="100%" gradientUnits="objectBoundingBox">
            <stop className="shadow-end" offset="0%" />
            <stop className="shadow-start" offset="50%" />
            <stop className="shadow-end" offset="100%" />
          </linearGradient>
        </defs>
      </g>
    </motion.svg>
  </motion.div>
  )
}

const variantN = {
    initial: { scale: 0 },
    animated: { scale: 1, transition: { duration: 0.4 }  },
}

const variantNShadow = {
  initial: { opacity: 1 },
  animated: { opacity: 0, transition: { delay: 0.2, duration: 0.4 }  },
}

const variantE1 = {
  initial: { x: 50, scaleX: 0 },
  animated: { x: 0, scaleX: 1, transition: { ease: "linear", delay: 0.4 , duration: 0.08 } },      
}

const variantE2 = {
    initial: { scaleY: 0, originX: "100%", originY: "80%" },
    animated: { scaleY: 1, originX: "50%", originY: "100%", transition: { ease: "linear", delay: 0.48 , duration: 0.08 } },      
}

const variantE3 = {
  initial: { x: -50, scaleX: 0 },
  animated: { x: 0, scaleX: 1, transition: { ease: "linear", delay: 0.53 , duration: 0.08 } },      
}

const variantE4 = {
  initial: { x: -40, scaleX: 0 },
  animated: { x: 0, scaleX: 1, transition: { ease: "linear", delay: 0.58 , duration: 0.08 } },      
}

const variantEShadow = {
  initial: { opacity: 1 },
  animated: { opacity: 0, transition: { delay: 0.65, duration: 0.08 }  },
}

const variantT1 = {
  initial: { x: -50, scaleX: 0 },
  animated: { x: 0, scaleX: 1, transition: { ease: "linear", delay: 0.58 , duration: 0.08 } },    
}

const variantT2 = {
  initial: {y: -100, scaleY: 0, },
  animated: {y: 0, scaleY: 1, transition: { ease: "linear", delay: 0.63 , duration: 0.08 } },   
}

const variantTShadow = {
  initial: { opacity: 1 },
  animated: { opacity: 0, transition: { delay: 0.70, duration: 0.4 }  },
}

const variantF1 = {
  initial: { x: -50, scaleX: 0 },
  animated: { x: 0, scaleX: 1, transition: { ease: "linear", delay: 0.68 , duration: 0.08 } },     
}

const variantF2 = {
  initial: {y: -100, scaleY: 0, },
  animated: {y: 0, scaleY: 1, transition: { ease: "linear", delay: 0.73 , duration: 0.08 } },     
}

const variantF3 = {
  initial: { x: -40, scaleX: 0 },
  animated: { x: 0, scaleX: 1, transition: { ease: "linear", delay: 0.78 , duration: 0.08 } },     
}

const variantFShadow = {
  initial: { opacity: 1 },
  animated: { opacity: 0, transition: { delay: 0.85, duration: 0.4 }  },
}

const variantL1 = {
  initial: {y: -100, scaleY: 0, },
  animated: {y: 0, scaleY: 1, transition: { ease: "linear", delay: 0.83 , duration: 0.08 } },   
}

const variantL2 = {
  initial: { x: -50, scaleX: 0 },
  animated: { x: 0, scaleX: 1, transition: { ease: "linear", delay: 0.88 , duration: 0.08 } },     
}

const variantLShadow = {
  initial: { opacity: 1 },
  animated: { opacity: 0, transition: { delay: 0.95, duration: 0.4 }  },
}

const variantI = {
  initial: {y: -100, scaleY: 0, },
  animated: {y: 0, scaleY: 1, transition: { ease: "linear", delay: 0.93 , duration: 0.08 } },    
}

const variantX1 = {
  initial: {y: 100, x: -50, scale: 0, },
  animated: {y: 0, x: 0, scale: 1, transition: { ease: "linear", delay: 0.98 , duration: 0.08 } },    
}

const variantX2 = {
  initial: {y: -100, x: -50, scale: 0, },
  animated: {y: 0, x: 0, scale: 1, transition: { ease: "linear", delay: 0.98 , duration: 0.08 } },  
}

const variantXShadow = {
  initial: { opacity: 1 },
  animated: { opacity: 0, transition: { delay: 1.2, duration: 0.4 }  },
}

const variantSlide = {
  initial: { x:"50%", left:"50%" },
  animated: { x:0, left:0 , transition: { delay: 0.5, duration: 1 }  },
}

const variantExit = {
  initial: { opacity: 1 },
  animated: { opacity: 0, transition: { delay: 1.5, duration: 0.8 }, transitionEnd: { display: "none" }  },
}

export default AnimationNetflix