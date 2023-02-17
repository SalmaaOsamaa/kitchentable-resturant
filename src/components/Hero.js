import React from 'react';
//import data 
import {heroData} from '../data'
import Header from './Header'
import {motion} from 'framer-motion'
import '../index.css'
import {fadeIn, staggerContainer} from '../variants'
import { Link } from 'react-router-dom';
const Hero = () => {
  //destructuring hero data
  const {pretitle, title, subtitle, btnText, backVideo} = heroData
  return(
    <>
    <div className=" relative">
   
    <div className='aspect-w-16 aspect-h-9 '>
  <video src={backVideo} className="w-full h-full object-cover z-0 min-h-[800px]" autoPlay muted loop>
  <Header/>
  </video>
  </div>
  <motion.div
   variants={staggerContainer(0.3,1)}
      initial='hidden'
      whileInView={'show'}
   className="absolute top-60 right-3 w-full h-full z-10 mx-auto min-h-[980px] flex justify-center items-centerr">

  {/*text */}
  <motion.div 
  variants={fadeIn('down', 'tween', 0.2, 1.1)}
  className='text-center flex flex-col items-center'>
  {/* pretitle */}
  <div  className='text-white text-[24px]
   lg:text-[28px] font-primary italic
    lg:font-medium mb-1'>
{pretitle}
  </div>
  <motion.h1 
  variants={fadeIn('down', 'tween', 0.3, 1.1)}
  className="h1 mb-5 ">
     {title}
    </motion.h1>
    <motion.p 
    variants={fadeIn('down', 'tween', 0.4, 1.1)}
    className='text-white max-w-[540px] mb-8'>
      {subtitle}
    </motion.p>
    <motion.div
    variants={fadeIn('down', 'tween', 0.5, 1.1)}
    >
      <Link to='/menu' className='btn hover:bg-zinc-600/70'>{btnText}</Link>
    </motion.div>
  </motion.div>
  </motion.div>
</div>

      </>
  )
};

export default Hero;
