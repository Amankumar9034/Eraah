import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import SubscibeBox from '../components/SubscribeBox'

const Services = () => {
  return (
    <div className='bg-gradient-to-b from-white via-sky-300 to-cyan-500 w-full h-full flex flex-col gap-5 p-5'>
      <p className='text-center text-4xl font-bold m-10 mb-1'>We holistically solve
      all your marketing needs</p>
      <p className='text-center m-2 text-2xl font-bold text-cyan-800'>We offer 3 products which help you</p>

      <div className='flex flex-col gap-5 m-2'>
        
        <div className='flex flex-col grid md:grid-cols-[1fr_1fr] rounded-lg bg-violet-300'>
          <div className='p-2 m-2'>
            <Title text1={'Impact Report Generator I'} text2={''} />
            <div className='text-justify text-xl p-2 my-3 bg-sky-200 rounded-xl text-cyan-700 font-bold' >
              <p>This is a free version which automates the entire impact input process for you.</p><br />
              <Link to='/contact'>
              <button type='submit' className=" flex bg-black bg-cyan-900 font-bold text-lg text-white justify-center rounded-2xl px-7 py-2 text-sm">Book A Call</button></Link>
            </div>
          </div>
          <div>
          <video className='p-3 bg-violet-600 rounded-lg mx-2 my-2' src='/services_video.mp4' muted autoPlay loop width="600"></video>

          </div>
        </div>
        
        <div className='flex flex-col grid md:grid-cols-[1fr_1fr] rounded-lg bg-violet-300'>
          <div className='p-2 m-2'>
            <Title text1={'Personalized App'} text2={''} />
            <div className='text-justify text-xl p-2 my-3 bg-sky-200 rounded-xl text-cyan-700 font-bold' >
              <p>This is a free version which automates the entire impact input process for you.</p><br />
            </div>
          </div>
          <div>
          <img src={assets.services_1} alt="" />
          </div>
        </div>
       
        <div className='flex flex-col grid md:grid-cols-[1fr_1fr] rounded-lg bg-violet-300'>
          <div className='p-2 m-2'>
            <Title text1={'Marketing Plug-In'} text2={''} />
            <div className='text-justify text-xl p-2 my-3 bg-sky-200 rounded-xl text-cyan-700 font-bold' >
              <p>This is a free version which automates the entire impact input process for you.</p><br />
            </div>
          </div>
          <div>
            <img src={assets.services_2} alt="" />
          </div>
        </div>
      </div>
      <div>
      <SubscibeBox />
      </div>
    </div>
  )
}

export default Services
