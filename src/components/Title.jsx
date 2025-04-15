import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='text-3xl font-bold text-cyan-800'>{text1} <span className='font-bold text-cyan-700 font-medium'>{text2}</span> </p>      
        <p className='w-8 sm:w-12 h-[2px] bg-orange-500'></p>      
    </div>
  )
}

export default Title
