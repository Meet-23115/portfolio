import Main from '@/components/Hero'
import Nav from '@/components/Nav'
import SecondSection from '@/components/SecondSection'

import React from 'react'

const index = () => {
  return (
    <>
      <Nav/>
      <div className=' w-screen flex h-[94vh]  pt-[20px]'>
        <Main/>
        


      </div>
      <SecondSection/>
    </>


  )
}

export default index
