import React from 'react'

const Nav = () => {
  return (
    <>
        <div className='  w-screen pt-[10px] h-[6vh] flex justify-end'>
            <div className='flex w-[200px] justify-around'>
              <div className=' border border-2 p-2 rounded-[50px] pr-3 pl-3   flex items-center border-white '>Profile</div>
              <div className='border p-2 border-2 rounded-[50px] pr-3 pl-3 flex items-center border-white bg-white text-black  '>Projects</div>
            </div>
        </div>
    </>
  )
}

export default Nav
