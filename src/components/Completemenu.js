// import data
import { completemenuData } from "../data";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn } from "../variants";
const Completemenu = () => {
  //destrucutre team data
  const {
    pretitle,
    title,
    subtitle,
  btnTexts,
    image,
  } = completemenuData;
  return (
    <div className="flex flex-col  mx-auto  bg-stone-200/50 lg:h-screen  w-full lg:flex-row ">
      {/*col-1 */}
      <motion.div
      initial={{opacity:0, translateX: -50}}
      animate={{opacity:1, translateX:0}}
      transition={{duration:0.5, delay:0.1}}
       className="flex-1  w-full h-1/2 ">
        <img src={image} alt="" />
      </motion.div>
      {/*col-2 */}
      <motion.div 
      initial={{opacity:0, translateY: -50}}
      animate={{opacity:1, translateY:0}}
      transition={{duration:0.5, delay:0.5}}
      
      className=" flex-1 lg:text-left lg:pt-16 w-full h-1/2 ">
        <h2 className="h2 capitalize mb-8 text-center">{title}</h2>
        <h3 className="pretitle mb-8 text-center">{pretitle}</h3>
        <p className=" mb-[60px] text-black text-center whitespace-nowrap text-base leading-6">{subtitle}</p>
        <div class="flex flex-col space-y-4 items-center flex-wrap ">
        {btnTexts.map((btn, i)=>(
          <motion.button
           initial={{opacity:0, translateY: -50}}
      animate={{opacity:1, translateY:0}}
      transition={{duration:0.7, delay: i*0.5}}
      variants={fadeIn("up", "tween", 0.7, 1.6)}
          
           id={btn.id} className=" btn w-1/3 py-2 px-4 text-black hover:text-white font-bold ">
            <span>{btn.btnname}</span>
            <svg
              class="w-6 h-6 mr-2 align-middle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M14.293 10l-4.147-4.146a.5.5 0 01.708-.708l4.5 4.5a.5.5 0 010 .707l-4.5 4.5a.5.5 0 01-.708-.708L14.293 10z"
                clip-rule="evenodd"
              />
            </svg>
          </motion.button>
        ))}
         
          
         
         
        </div>

      
      </motion.div>
    </div>
  );
};

export default Completemenu;
