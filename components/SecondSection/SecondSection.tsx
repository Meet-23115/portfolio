import React, { useState } from 'react';

const SecondSection = () => {
  const options = {
    
  }
  const [selectedOption, setSelectedOption] = useState('1');
  return (
    <>
      <div className=' h-[100vh] w-[100vw]  flex items-center justify-center secondSectionAnimate'>



        <div className='h-full flex items-center justify-center w-1/2'>
          <div className='h-[300px] w-[400px] '>
            <ul className=' flex h-full flex-col secondSectionList gap-[20px]'>
              <li>
                THGHTFY
              </li>
              <li>
                Youtube
              </li>
              <li>
                Scholar Mitra
              </li>
              <li>
                Naturally Pahadi
              </li>
            </ul>
          </div>

        </div>


        <div className='h-full w-1/2 flex items-center justify-center pr-6'>
          <img src="/macbook cover.png" className='h-[300px] ' alt="" />
        </div>



      </div>
    </>
  )
}

export default SecondSection
