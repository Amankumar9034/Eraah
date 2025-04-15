import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-gray-700'>
      <div className='flex flex-col sm:grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-10 my-10 mt-0 mb-0 p-10 text-sm xl:ml-10 xl:p-20 '>

        <div className='ml-5'>
          <img src={assets.logo} className='w-14' alt="Logo" />
          <p className="text-2xl font-bold bg-gradient-to-l from-green-400 to-red-400 inline-block text-transparent bg-clip-text">
            Eraah
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-2 text-white">COMPANY</p>
          <ul className="flex flex-col gap-1 text-white">
            <Link to='/'> <li>Home</li></Link>
            <Link to='/services'> <li>Services</li></Link>
            <Link to='/about'> <li>About Us</li></Link>
            <Link to='/contact'><li>Contact Us</li></Link>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-2 text-white">IMPORTANT</p>
          <ul className="flex flex-col gap-1 text-white">
            <Link to='/careers'> <li>Join Us</li></Link>
            <Link to='/partner'> <li>Partner NGOS</li></Link>
            <Link to='/policy'> <li>Privacy Policy</li></Link>
            <Link to='/terms'><li>Terms & Conditions</li></Link>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-2 text-white">FOLLOW US</p>
          <ul className="flex flex-col sm:grid grid-cols-[1fr_1fr_1fr_1fr] ">
            <li className='w-6 my-1 p-1 bg-black rounded-full'><a href="https://www.instagram.com/eraah_org/?igsh=M3k3NzMyMmt6b20%3D#" target='_blank'><img src={assets.insta_icon} alt="insta" /></a></li>
            <li className='w-6 my-1 p-1 bg-black rounded-full'><a href="https://www.linkedin.com/company/eraah/" target='_blank'><img src={assets.linkedin_icon} alt="linkedin" /></a></li>
            <li className='w-6 my-1 p-1 bg-black rounded-full'><a href="https://x.com/eraah_org?s=21&t=78VDFA9U7opi0vJ_Df7MnQ" target='_blank'><img src={assets.twitter_icon} alt="twitter" /></a></li>
            <li className='w-6 my-1 p-1 bg-black rounded-full fill-red-400'><a href="https://www.youtube.com/@eraah_org" target='_blank'><img src={assets.youtube_icon} alt="youtube" /></a></li> 
          </ul>
        </div>

        <div >
          <p className="text-xl font-medium mb-2 text-white">OUR OFFICE</p>
          <a href="https://www.google.com/maps/place/Eraah/@28.4699961,77.0455017,17z/data=!4m6!3m5!1s0x390d193043316e5f:0x81663bf2380f7610!8m2!3d28.4702791!4d77.0452925!16s%2Fg%2F11vpz8yvfk?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoASAFQAw%3D%3D"  target='_blank'>
            <ul className="flex flex-col gap-1 text-white">
              <li>B-38, Block M, Old DLF Colony,</li>
              <li>Sector 14, Gurugram, Haryana</li>
              <li>PIN : 122001</li>
            </ul>
          </a>
        </div>

      </div>

      <div>
        <hr />
        <p className="py-3 font-bold text-white text-sm text-center">Copyright {new Date().getFullYear()} @Eraah - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
