import React from 'react'

const Nav = () => {
  return (
    <>
        <div className='  w-screen pt-[10px] pr-[20px] h-[6vh] flex justify-end'>
            <div className='flex w-[200px] justify-around'>
              <div className=' border border-2 p-2 rounded-[50px] pr-3 pl-3   flex items-center border-white  '>About</div>
              <div className='border p-2 border-2 rounded-[50px] pr-3 pl-3 flex items-center border-white border hover:bg-black hover:text-white border-black bg-white text-black  '>Projects</div>
            </div>
        </div>
    </>
  )
}

export default Nav
