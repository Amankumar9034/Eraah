import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='bg-gradient-to-b from-white via-sky-300 to-cyan-500 w-full h-full'>
      <div className='text-center text-2xl pt-2 mb-4 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
        <p className='text-center text-xl p-3 bg-sky-300 rounded-full text-cyan-700 font-bold'>Our organization purpose is bringing transparency and making impact visible of every rupee donated.</p>
      </div>

      <div className="flex grid sm:grid-cols-[1fr_1fr] text-sm m-1 mb-2 p-2 gap-5" >
        <div className="border px-10 md:px-16 py-20 flex flex-col gap-5 shadow-lg shadow-blue-700 ">
          <div className='flex justify-center'>
            <img className='w-40' src={assets.mission_icon} alt="" />
          </div>
          <p className='text-center text-xl p-3 bg-sky-300 rounded-full text-cyan-700 font-bold'>Mission</p>
          <b className='text-center text-xl p-2 bg-sky-300 rounded-xl text-cyan-700 font-bold'>Visible Outcomes</b>
          <p className='text-center p-1 px-2 bg-sky-300 rounded-lg text-cyan-700 font-bold'>Ensuring Transparency for Every Donated Rupee</p>
        </div>
        <div className="border px-10 md:px-16 py-20 flex flex-col gap-5 shadow-lg shadow-blue-700">
          <div className='flex justify-center'>
            <img className='w-40' src={assets.vision_icon} alt="" />
          </div>
          <p className='text-center text-xl p-3 bg-sky-300 rounded-full text-cyan-700 font-bold'>Vision</p>
          <b className='text-center text-xl p-2 bg-sky-300 rounded-xl text-cyan-700 font-bold'>100 million users</b>
          <p className='text-center p-1 px-2 bg-sky-300 rounded-lg text-cyan-700 font-bold'>(1% plus of the world donating)</p>
        </div>
      </div>

    </div>
  )
}

export default About
