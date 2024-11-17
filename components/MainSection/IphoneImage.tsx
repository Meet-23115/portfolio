import React from 'react';
import { motion } from "framer-motion"; // Correct import

const IphoneImage = () => {
  return (
    <div className="h-[90%] w-1/2 flex justify-center items-end pt-[40px]">
      <motion.div
        initial={{ translateX: "500px" }} // Start with translateX 500px
        animate={{ translateX: "0px" }} // Animate to translateX 0px
        transition={{ duration: 1.5 }} // Animation duration (3 seconds)
      >
        <div className="relative h-[460px] w-[200px]">
          {/* iPhone Image */}
          <img
            src="/iphonewithoutbackground.png"
            className="h-[408px] absolute w-[200px] object-contain"
            alt="Project screen"
          />
          <div className="h-full w-full flex pt-3">
            {/* Portfolio Image */}
            <div className="h-[385px] flex items-end ml-2 w-[180px] rounded-[30px] bg-[#BCBBB7]">
              <img
                src="/portfolioImage1.png"
                className="rounded-[20px] h-[80%] w-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IphoneImage;
