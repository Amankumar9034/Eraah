import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Careers = () => {
  return (
    <div className='bg-gradient-to-b from-white via-sky-300 to-cyan-500 w-full h-full flex flex-col gap-5 p-5'>
      <p className='text-center text-5xl font-bold m-10'>Careers</p>
      <div className='flex flex-col sm:grid md:grid-cols-[1fr_1fr] gap-5 m-2 rounded-lg bg-violet-300'>

        <div className='p-2 m-2'>
          <Title text1={'Why you should join our awesome team ?'} text2={''} />
          <div className='text-justify text-xl p-2 my-3 bg-sky-200 rounded-xl text-cyan-700 font-bold' >
            <p>we want to feel like home when you are working at Eraah for that we have curated a great set of benefits for you.</p><br />
          </div>
          <img className='w-full p-2' src={assets.careers_img} alt="" />
        </div>

        <div className='flex grid md:grid-cols-1 lg:grid-cols-2 m-5'>

          <div className="border px-10 md:px-16 py-3 flex flex-col gap-5 shadow-lg shadow-blue-700 ">
            <div className='flex justify-center w-40 bg-white '>
              <img className='w-32 bg-white p-2 mt-2' src={assets.careers_teamwork} alt="" />
            </div>
            <p className='text-center text-xl p-2 bg-sky-300 rounded-full text-cyan-700 font-bold'>Team work</p>
            <p className='text-center p-1 px-2 bg-sky-300 rounded-lg text-cyan-800 font-sembold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, distinctio, ipsam ducimus pariatur officia magni ab qui cum enim nulla at repellat maiores aspernatur laboriosam iusto! Blanditiis et labore aperiam!</p>
          </div>

          <div className="border px-10 md:px-16 py-3 flex flex-col gap-5 shadow-lg shadow-blue-700 ">
            <div className='flex justify-center w-40 bg-white '>
              <img className='w-32 bg-white p-2 mt-2' src={assets.careers_securedfuture} alt="" />
            </div>
            <p className='text-center text-xl p-2 bg-sky-300 rounded-full text-cyan-700 font-bold'>Secured future</p>
            <p className='text-center p-1 px-2 bg-sky-300 rounded-lg text-cyan-800 font-sembold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, distinctio, ipsam ducimus pariatur officia magni ab qui cum enim nulla at repellat maiores aspernatur laboriosam iusto! Blanditiis et labore aperiam!</p>
          </div>

          <div className="border px-10 md:px-16 py-3 flex flex-col gap-5 shadow-lg shadow-blue-700 ">
            <div className='flex justify-center w-40 bg-white '>
              <img className='w-32 bg-white p-2 mt-2' src={assets.careers_learn} alt="" />
            </div>
            <p className='text-center text-xl p-2 bg-sky-300 rounded-full text-cyan-700 font-bold'>Learning opportunity</p>
            <p className='text-center p-1 px-2 bg-sky-300 rounded-lg text-cyan-800 font-sembold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, distinctio, ipsam ducimus pariatur officia magni ab qui cum enim nulla at repellat maiores aspernatur laboriosam iusto! Blanditiis et labore aperiam!</p>
          </div>

          <div className="border px-10 md:px-16 py-3 flex flex-col gap-5 shadow-lg shadow-blue-700 ">
            <div className='flex justify-center w-40 bg-white '>
              <img className='w-32 bg-white p-2 mt-2' src={assets.careers_upgrade} alt="" />
            </div>
            <p className='text-center text-xl p-2 bg-sky-300 rounded-full text-cyan-700 font-bold'>Upgrade skills</p>
            <p className='text-center p-1 px-2 bg-sky-300 rounded-lg text-cyan-800 font-sembold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, distinctio, ipsam ducimus pariatur officia magni ab qui cum enim nulla at repellat maiores aspernatur laboriosam iusto! Blanditiis et labore aperiam!</p>
          </div>

        </div>
      </div>

      <div className='p-2 m-2 text-center m-10'>
        <Title text1={'Career openings'} text2={''} />
        <div className='text-justify text-xl p-3 my-3 bg-sky-200 rounded-xl text-cyan-700 font-bold' >
          <p>We’re always looking for creative, talented self-starters to join the JMC family. Check out our open roles below and fill out an application.</p>
        </div>
      </div>

    </div>
  )
}

export default Careers
