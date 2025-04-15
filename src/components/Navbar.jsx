import React, {useState} from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  const [visible, setVisible] = useState(false);


  return (
    <div className='flex items-center justify-between py-2 font-medium bg-gray-700'>
      <Link to='/'>
        <div className='ml-5'>
          <img src={assets.logo} className='w-14' alt="Logo" />
          <p className="text-2xl font-bold bg-gradient-to-l from-green-400 to-red-400 inline-block text-transparent bg-clip-text">
            Eraah
          </p>
        </div>
      </Link>

      <ul className='hidden sm:flex gap-5 font-bold text-sm text-white'>

        <NavLink to='/' className='flex flex-col items-center gap-1 scale-1.5px'>
          <p>Home</p>
          <hr className='w-3/4 border-none h-[1.5px] bg-green-400 hidden' />
        </NavLink>

        <NavLink to='/services' className='flex flex-col items-center gap-1'>
          <p>Services</p>
          <hr className='w-3/4 border-none h-[1.5px] bg-green-400 hidden' />
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>About Us</p>
          <hr className='w-3/4 border-none h-[1.5px] bg-green-400 hidden' />
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>Contact Us</p>
          <hr className='w-3/4 border-none h-[1.5px] bg-green-400 hidden' />
        </NavLink>

        <NavLink to='/login' className='flex flex-col items-center gap-1'>
          <p>Log In</p>
          <hr className='w-3/4 border-none h-[1.5px] bg-green-400 hidden' />
        </NavLink>

      </ul>

      <div className='flex items-center gap-5 h-7 w-5 rounded bg-white sm:bg-inherit mr-5'>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className=' w-5 cursor-pointer p-0.5 sm:hidden' alt="" />
      </div>
      {/* Sidebar Menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 left-20 overflow-hidden bg-gradient-to-r from-gray-700 to-red-500 transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col font-bold text-white'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-5 rotate-180' src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 text-center' to='/'>Home</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 text-center' to='/services'>Services</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 text-center' to='/about'>About Us</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 text-center' to='/contact'>Contact Us</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 text-center' to='/login'>Log In</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
