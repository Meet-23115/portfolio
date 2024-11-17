import React from 'react'

const Nav = () => {
  return (
    <>
        <div className='  w-screen pt-[10px] nav-back pr-[20px] customFont  h-[6vh] flex justify-between fixed'>
          <div className='h-[7vh] text-white    top-0 right-0 w-screen bg-black opacity-20 absolute z-[-1]'>
            
            
          </div>
          <div className='text-white pl-5'>
            Meet Gelothra
          </div>
            <div className='flex w-[200px] justify-around'>

              <div className='  border-2 p-2 rounded-[50px] pr-3 pl-3   flex items-center border-white cursor-pointer  text-white hover:bg-black hover:text-white  '>About</div>
              <div className=' p-2 border-2 rounded-[50px] pr-3 pl-3 flex cursor-pointer items-center border-white  hover:bg-black hover:text-white  bg-white text-black  '>Projects</div>
            </div>
        </div>
    </>
  )
}

export default Nav
