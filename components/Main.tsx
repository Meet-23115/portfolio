import React from 'react'

const Main = () => {
  return (
    <>
        <div className='h-[90vh] w-full pl-10 pt-5 bottom-round  bg-white'>

        <p className=' customFont  text-5xl'> 
            {`>`} I am A web developer.
        </p>
        <div className='h-[90%]  flex  justify-center  relative items-end pt-[40px]'>
            <img src="/undraw_undraw_computer_apps_9ssq_-2-_hyf7.svg" className=' h-[500px]  w-[800px]  object-cover' alt="Project screen" />
            <img src="/portfolioimage.jpg" className=' absolute top-[125px]  h-[349px] w-[618px]  right-[435px] object-cover' alt="" />
        </div>
        
        </div>
    </>
  )
}

export default Main
