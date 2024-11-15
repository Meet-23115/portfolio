import React from 'react'
import IphoneImage from './IphoneImage'
import HeroLeftText from './HeroLeftText'

const Hero = () => {
  return (
    <>
      <div className='h-[90vh] flex w-full pl-10 pt-5 bottom-round  '>
        
        <HeroLeftText/>
        <IphoneImage/>

      </div>
    </>
  )
}

export default Hero
