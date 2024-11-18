import React from 'react';
import { motion } from "framer-motion"; // Correct import

const HeroLeftText = () => {
  return (
    <div className=' text-center h-full  text-white flex items-center justify-center w-1/2'>

      <motion.div
      initial={{ translateY : "-500px"}}
      animate={{ translateY : "0px" }}
      transition={{ duration: 2 }}
      >

    <div className=' flex flex-col  gap-10  h-full items-center'>
            <p className=' customFont pl-5  text-5xl'>
              Meet Gelothra
            </p>
            <p className='customFont   text-3xl'>
             <span className=' text-[#8a7789]'>{'=>'}</span>  I Am A Web Developer
            </p>
            <p className='  pl-[100px] pr-[100px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla quaerat in provident facilis dolorem placeat aliquam deserunt, architecto itaque earum numquam error ipsum distinctio facere assumenda ipsam quasi quibusdam. A amet iusto porro, maxime cumque at, similique fuga eum aliquid odio expedita obcaecati tenetur, culpa pariatur cum? Ea, tempore.
            </p>
          </div>

      </motion.div>
          

        </div>
  )
}

export default HeroLeftText
