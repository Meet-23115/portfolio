import React from 'react';
import {motion } from 'framer-motion';

const LoadingPage = () => {
  return (
    <div className=' h-screen z-10 bg-black text-white w-screen absolute top-0 left-0'>
                <div className="flex justify-center items-center min-h-screen">
      <motion.div
        className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full"
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />
    </div>
    </div>
  )
}

export default LoadingPage
