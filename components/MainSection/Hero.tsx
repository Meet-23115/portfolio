import React from 'react'
import HeroLeftText from './HeroLeftText'
import IphoneImage from './IphoneImage'



const Hero = () => {
  return (
    <>
      <div className='h-[100vh]  flex w-full pl-10 pt-5 bottom-round relativec '>
        <img src="./blackBackgroundImage.jpg " className=' absolute h-full  top-0 left-0 w-full z-[-1]' alt="" />
        <HeroLeftText/>
        <IphoneImage/>

      </div>
    </>
  )
}

export default Hero