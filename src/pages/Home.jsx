import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Home = () => {
  return (
    <div className='flex flex-col bg-gradient-to-b from-white via-sky-300 to-cyan-500'>

      <div className='text-center text-2xl pt-2 mb-4 m-5 border-t bg-gradient-to-r from-orange-400 via-sky-300 to-red-300'>
        <Title text1={'Showcasing impact madeT'} text2={'simpler.'} />
        <p className='text-center text-xl p-3 mx-5 bg-sky-300 rounded-full text-cyan-700 font-bold'>Eraah lets you showcase the impact you create to your donors in just a
        few clicks, reduces costs & boosts your marketing</p>
        <img className='w-80 m-auto' src={assets.hero_img} alt="" />
      </div>

      <div className='flex flex-col sm:grid gap-2 m-2 rounded-lg bg-violet-300'>
        <p className='text-center text-5xl font-bold m-5 mb-1 bg-gradient-to-l from-blue-600 via-pink-500 to-orange-500 inline-block text-transparent bg-clip-text'>How do we help you?</p>
        <div className='flex grid sm:grid-cols-1 md:grid-cols-2 m-5'>

          <div className="border px-8 md:px-16 py-2 flex flex-col gap-2 shadow-lg shadow-blue-700 ">
            <div className='flex justify-center w-40 bg-white '>
              <img className='w-32 bg-white p-2 mt-2' src={assets.home_reduce} alt="" />
            </div>
            <p className='text-center text-xl p-2 bg-sky-300 rounded-full text-cyan-700 font-bold'>Reduce Costs + Save Time</p>
            <p className='text-center p-1 px-2 bg-sky-300 rounded-lg text-cyan-800 font-sembold'>With just a few clicks you can save time and resources where it counts, helping your organization to meet its broader business goals.</p>
          </div>

          <div className="border px-8 md:px-16 py-2 flex flex-col gap-2 shadow-lg shadow-blue-700 ">
            <div className='flex justify-center w-40 bg-white '>
              <img className='w-32 bg-white p-2 mt-2' src={assets.home_improve} alt="" />
            </div>
            <p className='text-center text-xl p-2 bg-sky-300 rounded-full text-cyan-700 font-bold'>Improve Compliance</p>
            <p className='text-center p-1 px-2 bg-sky-300 rounded-lg text-cyan-800 font-sembold'>With just a few clicks you can save time and resources where it counts, helping your organization to meet its broader business goals.</p>
          </div>

          <div className="border px-8 md:px-16 py-2 flex flex-col gap-2 shadow-lg shadow-blue-700 ">
            <div className='flex justify-center w-40 bg-white '>
              <img className='w-32 bg-white p-2 mt-2' src={assets.partner_expand} alt="" />
            </div>
            <p className='text-center text-xl p-2 bg-sky-300 rounded-full text-cyan-700 font-bold'>Effectively Showcase Impact</p>
            <p className='text-center p-1 px-2 bg-sky-300 rounded-lg text-cyan-800 font-sembold'>With just a few clicks you can save time and resources where it counts, helping your organization to meet its broader business goals.</p>
          </div>

          <div className="border px-8 md:px-16 py-3 flex flex-col gap-5 shadow-lg shadow-blue-700 ">
            <div className='flex justify-center w-40 bg-white '>
              <img className='w-32 bg-white p-2 mt-2' src={assets.home_plugin} alt="" />
            </div>
            <p className='text-center text-xl p-2 bg-sky-300 rounded-full text-cyan-700 font-bold'>Easy Plug-in</p>
            <p className='text-center p-1 px-2 bg-sky-300 rounded-lg text-cyan-800 font-sembold'>With just a few clicks you can save time and resources where it counts, helping your organization to meet its broader business goals.</p>
          </div>

        </div>
      </div>

      <div className='w-full h-full flex flex-col gap-5 m-auto my-5 p-5 bg-violet-300'>
        <p className='text-center text-6xl font-bold m-10 mb-1 bg-gradient-to-l from-orange-700 via-pink-500 to-red-500 inline-block text-transparent bg-clip-text'>Why choose us?</p>

        <div className='flex flex-col gap-2 m-2'>

          <div className='flex flex-col grid md:grid-cols-[1fr_1fr] rounded-lg'>
            <div className='p-2 m-1'>
              <Title text1={'No need for technical team'} text2={''} />
              <div className='text-justify text-xl p-2 my-3 bg-sky-200 rounded-xl text-cyan-700 font-bold' >
                <p>With just a few clicks you can save time and resources where it counts, helping your organization to meet its broader business goals.</p><br />
              </div>
            </div>
            <div>
              <img src={assets.home_1} alt="" />
            </div>
          </div>

          <div className='flex flex-col grid md:grid-cols-[1fr_1fr] rounded-lg'>
            <div>
              <img src={assets.home_2} alt="" />
            </div>
            <div className='p-2 m-1'>
              <Title text1={'Personalised AI tool'} text2={''} />
              <div className='text-justify text-xl p-2 my-3 bg-sky-200 rounded-xl text-cyan-700 font-bold' >
                <p>With just a few clicks you can save time and resources where it counts, helping your organization to meet its broader business goals.</p><br />
              </div>
            </div>
          </div>

          <div className='flex flex-col grid md:grid-cols-[1fr_1fr] rounded-lg'>
            <div className='p-2 m-1'>
              <Title text1={'Free donation app'} text2={''} />
              <div className='text-justify text-xl p-2 my-3 bg-sky-200 rounded-xl text-cyan-700 font-bold' >
                <p>With just a few clicks you can save time and resources where it counts, helping your organization to meet its broader business goals.</p><br />
              </div>
            </div>
            <div>
              <img className='bg-gradient-to-b from-blue-700 via-sky-300 to-cyan-500 rounded-lg' src={assets.services_1} alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
