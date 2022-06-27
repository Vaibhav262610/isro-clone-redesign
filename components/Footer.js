import React from 'react'
import Image from 'next/dist/client/image'

const Footer = () => {
  return (
     <>
     <div className='flex sm:flex-row flex-col justify-around items-center bg-[#121212] h-96 sm:h-80 w-full'>
      <div className='flex flex-col justify-center text-white font-bold mt-8 sm:mt-0 '>
        <Image src='/img/logo.svg' width="100%" height='100%' className='h-40' />
        <div className='flex flex-col items-center'>
        <h1>Cloned by 💖</h1>
        <h1 className='animate-pulse text-green-300 '>Vaibhav Rajpoot</h1>
        </div>
      </div>
      <div>
        <div className='hidden sm:flex flex-col text-white font-bold'>
          <h1 className='w-fit text-xl tracking-wide border-b-2 border-b-white'>About Us</h1>
          <br />
          <h1 className='uppercase'>who we are</h1>
          <h1 className='uppercase'>contact us</h1>
          <h1 className=' '>FAQs</h1>
          <h1 className='uppercase'>missions</h1>
          <h1 className='uppercase'>other compAnies</h1>
        </div>
      </div>
      <div>
        <div className='hidden sm:flex flex-col text-white font-bold'>
          <h1 className='w-fit text-xl tracking-wide border-b-2 border-b-white'>Company</h1>
          <br />
          <h1 className='uppercase'>carrers</h1>
          <h1 className='uppercase'>legal</h1> 
          <h1 className='uppercase'>policy</h1>
          <h1 className='uppercase'>press</h1>
          <h1 className='uppercase'>bloG</h1>
        </div>

      </div>
      <div className='flex flex-col pb-8 sm:pb-0 gap-5'>
        <h1 className='text-xl text-white font-bold w-fit tracking-wide border-b-2 border-b-white'>Newsletter</h1>
        <div className=' flex gap-3 items-center bg-[#1d1d1d] px-3 sm:px-4 py-2 rounded-3xl  cursor-text text-white'>
        <input className='bg-transparent'  placeholder='Enter Email' />
<button className='bg-red-400 px-4 py-1 rounded-lg'>Subscribe</button>
        </div>
      </div>

     </div>
     </>
  )
}

export default Footer