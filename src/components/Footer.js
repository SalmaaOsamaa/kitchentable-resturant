import React from 'react';
import Newsletter from './Newsletter';
import Copyright from './Copyright';
import Socials from './Socials';

//import data 
import {footerData} from '../data';
//import motion
import {motion} from 'framer-motion'
//import variants 
import {fadeIn, staggerContainer} from '../variants'
const Footer = () => {
  // destructure footer data 
  const {contact, hours, social} = footerData
  return (
    <footer className='relative top-96 z-20 bg-dark lg:bg-transparent lg:py-48 lg:h-[980px] lg:bg-footer lg:bg-center lg:bg-no-repeat pt-20'>
    <div className='container mx-auto h-full'>
      {/*newsletter & info */}
      <motion.div 
      variants={staggerContainer}
      initial='hidden'
      whileInView={'show'}
      className='h-full flex flex-col gap-y-12'>
        {/*newsletter */}
        <motion.div 
        variants={fadeIn('up','tween', 0.4, 1.6)}
        
        >
        <Newsletter/>
        </motion.div>
         {/*info */}
         <motion.div
         variants={fadeIn('up','tween', 0.6, 1.6)}
          className='flex flex-col lg:flex-row lg:gap-x-[130px]  gap-y-12 lg:gap-y-0 lg:mb-12 bg-teal-800/30
          '>
          {/*contact */}
          <div className='flex-1 text-white lg:max-w-[170px]'>
            <div className='capitalize text-[20px] lg:text-[22px] font-normal font-primary mb-[22px]'>{contact.title}</div>
            <div className='capitalize'>{contact.address}</div>
            <div className='capitalize'>{contact.phone}</div>
          </div>
          {/*program */}
          <div className='flex-1 text-white font-primary'>
            <div className='capitalize text-[20px] lg:text-[22px] font-normal font-primary mb-[22px]'>{hours.title}</div>
            <div className='flex gap-x-[46px]'>
              {hours.program.map((item, index) => {
                return (
                  <div key={index} className='capitalize' >
                    <div>
                      <div>{item.days}</div>
                      <div className='text-[20px] text-white-400 italic'>{item.hours}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
           {/*social */}
           <div className='flex-1 lg:max-w-[280px] mb-12 text-white'>
            <div className='capitalize text-[20px] lg:text-[22px] font-normal font-primary mb-[22px]'>{social.title}</div>
            <Socials/>
           </div>
          </motion.div>
      </motion.div>
      <div className='h-[380px] md:h-[370px]'></div>
    </div>
 
    </footer>
  )
};

export default Footer;
