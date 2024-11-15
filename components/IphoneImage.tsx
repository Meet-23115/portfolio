import React from 'react'

const IphoneImage = () => {
  return (
    <div className='h-[90%] w-1/2  flex  justify-center items-end pt-[40px]'>
        <div className='relative h-[460px] w-[200px]  '>
        <img src="/iphonewithoutbackground.png" className=' h-[408px]   absolute    w-[200px]  object-contain' alt="Project screen" />
          <div className=' h-[380px] mt-3 flex  items-end   w-[190px] ml-1 mb-2 rounded-[40px] bg-[#BCBBB7]'>
            <img src="/portfolioImage1.png" className='  rounded-[20px]    h-full w-full   object-cover' alt="" />
          </div>
        </div>
       

        </div>
  )
}

export default IphoneImage
