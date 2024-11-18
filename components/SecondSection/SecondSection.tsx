import React, { useEffect, useState } from 'react';


const SecondSection = () => {
  const [url, setUrl] = useState<string | null>(null);
  const options = {
    Thghtfy:{
      url: "./thghtfy.png",
      text:"This is a social media app created before threads it has the same concept as threads but it was created before threads was launched. This web application is running on a Node.Js server created from scratch completly by me when i was in 12th grade. It uses Firebase Realtime database, Firebase Firestore, Google cloud, Firebase Authentication and many more libraries. All my projects is based on teaching me some new skill this project taught me Node.Js , Firebase, Authenticaiton, and many more libraries.",
    },
    Youtube:{
      url: "./Youtube.png",
      text: "This is a youtube clone. still experimenting with it. The Frontend uses next.js and the backend uses express. It uses MongoDb as database and Jwt and bcrypt for authentication. It uses cloudinary for videos. All my projects is based on teaching me some new skill this project taught me next.js tailwind mongodb and a lot more "
    }
  }
  const [selectedOption, setSelectedOption] = useState<keyof typeof options>("Thghtfy");

  useEffect(()=>{
    setUrl(options[selectedOption].url);
    
  },[selectedOption]);
  return (
    <>
      <div className=' h-[100vh] w-[100vw]  flex items-center justify-center secondSectionAnimate'>
        


        <div className='h-full flex items-center justify-center w-1/2'>
          <div className='h-[300px] w-[400px] '>
            <ul className=' flex h-full flex-col secondSectionList '>
            {Object.keys(options).map((key, index) => (
              <li key={index} className={selectedOption == key ?  " pt-2 cursor-pointer selectedOptionBackground": " pt-2 cursor-pointer"} onMouseEnter={() => setSelectedOption(key as keyof typeof options)}>
                {key}
              </li>
            ))}
              
            </ul>
          </div>

        </div>


        <div className='h-full w-1/2 flex flex-col items-center justify-evenly pr-6'>
        
        <div className='flex flex-col items-center justify-center'>
        <img src="/macbook cover.png" className='h-[300px] ' alt="" />
          <div className='  absolute h-[290px]   z-[-1] w-[420px]' >
            <img src={url || ""} className='h-full object-fill w-full' alt="Project Image" />
          </div>
        </div>
        <div className=' pl-[180px] h-[200px] pr-[180px] ' >
          {options[selectedOption].text}
        </div>
          
        </div>



      </div>
    </>
  )
}

export default SecondSection
