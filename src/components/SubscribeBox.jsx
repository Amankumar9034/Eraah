import React from 'react'

const SubscribeBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className='text-center m-2 p-2 rounded-lg bg-violet-300'>
      <p className="text-3xl font-bold text-gray-800">Get articles sent to your inbox</p>
      <p className="text-gray-700 font-semibold mt-3">
      Introducing: The world's best platform interface for NGOs.
      </p>
      <form className='w-full sm:w-1/2 flex items-center gap-1 mx-auto my-4 pl-2' onSubmit={onSubmitHandler}>
        <input type="email" className="w-full text-center font-semibold rounded-md p-2 sm:flex-1 outline-none" placeholder='Enter your email ' />
        <button type='submit' className='bg-black text-white text-xs m-1 rounded-lg font-semibold px-8 py-3' >SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default SubscribeBox
