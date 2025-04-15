import React, { useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    ngoName:'',
    ngoAim:'',
    howHelp:'',
    sectionArea:''
  })

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      ngoName:'',
      ngoAim:'',
      howHelp:'',
      sectionArea:''
    });
  }

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setFormData(data => ({ ...data, [name]: value }))
  }

  return (
    <div className='bg-gradient-to-b from-white via-sky-300 to-cyan-500 w-full h-full'>
      <div className='flex flex-col sm:grid lg:grid-cols-[1fr_1fr] gap-5 mt-0'>
        <img className='w-full  opacity-50 hidden lg:block' src={assets.contact_img} alt="" />
        <div className='flex flex-col sm:grid p-5 gap-5'>

          <div className='text-center text-2xl pt-2 border-t'>
            <Title text1={'CONTACT'} text2={'US'} />
            <p className='text-center text-xl pt-1 text-cyan-700 font-bold'>Not sure what you need? The team at Eraah will be happy to assist you with any of your queries.</p>
          </div>

          <div className='flex flex-col sm:flex-row sm:item items-start gap-5 ml-5'>
            <p className='font-bold text-xl text-gray-700'>Our Office</p>
            <p className='font-semibold text-gray-700'>B-38, Block M, Old DLF Colony, <br /> Sector 14, Gurugram, Haryana</p>
            <p className='font-semibold text-gray-700'>Tel: +91 9958828233 <br /> Email: shrey.bansal@eraah.org</p>
          </div>

          {/*-------------------- Form------------------ */}
          <form onSubmit={onSubmitHandler} className=' flex flex-col sm:flex-row justify-between gap-4 '>
            <div className='flex flex-col gap-4 w-full'>
              <div className='text-xl sm:text-2xl my-3'>
                <Title text1={'Let’s get'} text2={'in touch!'} />
                <p className='text-center text-xl pt-1 text-indigo-700 font-bold'>Leave your details below so we can talk about how being an Enterprise Partner can add to your success.</p>
              </div>

              <div className="flex gap-3">
                <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} type="text" placeholder='First Name' className="border border-gray-400 rounded-2xl py-1.5 px-3.5 w-full font-bold" />
                <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} type="text" placeholder='Last Name' className="border border-gray-400 rounded-2xl py-1.5 px-3.5 w-full font-bold" />
              </div>
              <div className="flex gap-3">
                <input required onChange={onChangeHandler} name='ngoName' value={formData.ngoName} type="text" placeholder='Ngo Name' className="border border-gray-400 rounded-2xl py-1.5 px-3.5 w-full font-bold" />
                <input required onChange={onChangeHandler} name='ngoAim' value={formData.ngoAim} type="text" placeholder='Ngo Aim' className="border border-gray-400 rounded-2xl py-1.5 px-3.5 w-full font-bold" />
              </div>
              <div className="flex gap-3">
                <input required onChange={onChangeHandler} name='email' value={formData.email} type="email" placeholder='Email Address' className="border border-gray-400 rounded-2xl py-1.5 px-3.5 w-full font-bold" />
                <input required onChange={onChangeHandler} name='phone' value={formData.phone} type="number" maxLength={10} placeholder='Phone' className="border border-gray-400 rounded-2xl py-1.5 px-3.5 w-full font-bold" />
              </div>
              
              <input required onChange={onChangeHandler} name='sectionArea' value={formData.sectionArea} type="text" placeholder='What are sections of society you help?' className="border border-gray-400 rounded-2xl py-1.5 px-3.5 w-full font-bold" />
              <input required onChange={onChangeHandler} name='howHelp' value={formData.howHelp} type="text" placeholder='How can we help you?' className="border border-gray-400 rounded-2xl py-1.5 px-3.5 w-full font-bold" />

              <button type='submit' className=" flex bg-black bg-cyan-900 font-bold text-white w-1/3 justify-center rounded-2xl px-10 py-3 text-sm">SUBMIT</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Contact
