import React from 'react'
import avatarimg from '../assets/01 image.png'

function Home() {
  return (
    <div className='text-white flex w-full gap-40 items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
            Hello i am aditi
        </h1>
        <p className='text-sm md:text-2xl tracking-tight'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aperiam numquam illo? Omnis illum commodi molestias beatae laudantium laborum veniam assumenda quos ut minus consectetur 
        </p>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Contact Me</button>
        </div> 
        <div className='w-[20vw] h-[20vw] '>
            <img className='' src={avatarimg} alt="" />
        </div>
    </div>
  )
}

export default Home
