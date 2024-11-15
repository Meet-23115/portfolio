import React from 'react'
import SecondSectionImage from './SecondSectionImage'
import SecondSectionText from './SecondSectionText'

const SecondSection = () => {
  return (
    <>
      <div className=' h-[100vh] w-[100vw]  flex items-center justify-center secondSectionAnimate'>

        

          <SecondSectionText />
          <SecondSectionImage />


        
      </div>
    </>
  )
}

export default SecondSection
