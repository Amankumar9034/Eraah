import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const Login = () => {

  const[currentState,setCurrentState] = useState('Login');

  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')

  const onSubmitHandler = async (event) =>{
    event.preventDefault();

  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto p-5 mb-20 mt-14  gap-4 text-gray-800'>
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular font-bold text-3xl">{currentState}</p>
        <hr className="border-none h-[3px] w-8 bg-gray-800" />
      </div>
      {currentState === 'Login' ? ""  :<input onChange={(e)=>setName(e.target.value)} value={name} type="text" className="w-full px-3 py-2 border border-gray-800" placeholder='Name' required />}
      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className="w-full px-3 py-2 border border-gray-800 rounded-2xl py-1.5 px-3.5 font-bold" placeholder='Email' required />
      <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className="w-full px-3 py-2 border border-gray-800 rounded-2xl py-1.5 px-3.5 font-bold" placeholder='Password' required />
      <div className="w-full flex justify-between text-sm mt-[5px]">
        <p className="cursor-pointer bg-black text-white p-1 rounded">Forget Your Password</p>
        {
          currentState === 'Login'
          ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer bg-black text-white p-2 rounded'>Create Account</p>
          : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer bg-black text-white p-1 rounded'>Login Here</p>
        }
      </div>
      <button className="bg-black text-white font-light px-7 py-2 mt-4 rounded">{currentState === 'Login' ?'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
