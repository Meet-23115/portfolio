
import AboutSection from '@/components/About/AboutSection'
import LoadingPage from '@/components/LoadingPage'
import MainSection from '@/components/MainSection/MainSection'
import Nav from '@/components/Nav/Nav'
import SecondSection from '@/components/SecondSection/SecondSection'

import React, { useEffect, useState } from 'react'
const index = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 5000);
  })
  return (
    <>
      
    <Nav/>
      <MainSection/>
      
      <SecondSection/>
      <AboutSection/>
    </>


  )
}

export default index
