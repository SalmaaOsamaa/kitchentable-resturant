import React from 'react'
import { teamData } from "../data";
import { motion } from "framer-motion";
// import variants
import { fadeIn } from "../variants";
function Aboutteam() {
    const {
        pretitle,
        title,
        sub1,
        sub2,
        name,
        occupation,
        signatureImg,
        chefImg,
      } = teamData;
  return (
    <div className="flex flex-col lg:text-left mx-auto bg-stone-200/50 lg:min-h-[720px] h-full w-full lg:flex-row ">
    {/*col-1 */}
    <motion.div 
      initial={{opacity:0, translateY: -50}}
      animate={{opacity:1, translateY:0}}
      transition={{duration:0.5, delay:0.5}}
      
      className=" flex-1 m-8 lg:text-left lg:pt-16  h-1/2  lg:w-1/4 ">
        <h2 className="h2 capitalize mb-8 text-center">{pretitle}</h2>
        <h3 className="pretitle mb-8 text-center">{title}</h3>
        <p className=" mb-[60px] text-black text-center  leading-6">{sub1}</p>
        <p className=" mb-[60px] text-black text-center  leading-6">{sub2}</p>
       <div className='flex flex-col justify-center text-center top-5 '>
       <p className="  text-black  leading-6">{name}</p> <span>{occupation}</span>
        <img src={signatureImg} className='lg:w-1/4 mx-auto' alt="" />
       </div>
       

      
      </motion.div>
    {/*col-2 */}
    <motion.div
      initial={{opacity:0, translateX: -50}}
      animate={{opacity:1, translateX:0}}
      transition={{duration:0.5, delay:0.1}}
       className="">
        <img src={chefImg} alt="" />
      </motion.div>
  </div>
  )
}

export default Aboutteam