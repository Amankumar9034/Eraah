import React, { useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Partner = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    ngoName: '',
    ngoAim: '',
    howHelp: '',
    sectionArea: ''
  })

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      ngoName: '',
      ngoAim: '',
      howHelp: '',
      sectionArea: ''
    });
  }

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setFormData(data => ({ ...data, [name]: value }))
  }

  return (
    <div className='bg-gradient-to-b from-white via-sky-300 to-cyan-500 w-full h-full flex flex-col gap-5 p-5'>
      <div className='m-5 p-5'>

        <div className='flex flex-col sm:grid md:grid-cols-[1fr_1fr] gap-5 m-2 rounded-xl border bg-indigo-300'>
          <img className='w-full md:h-60 lg:w-80 xl:ml-48 opacity-70' src={assets.partner_child} alt="" />
          <div>
            <Title text1={'Strength in Unity:'} text2={'Meet Our Valued Partners'} />
            <div className='text-justify text-xl p-3 m-3 bg-sky-300 rounded-xl text-cyan-700 font-bold' >
              <p>Our partners include governments, civil society organisations, faith communities, faith-based organisations, businesses, academia, and more</p><br />
            </div>
          </div>
        </div>

        <div className='text-center mt-5 border rounded-xl bg-indigo-300'>
          <Title text1={'How we can help you'} text2={''} />
          <div className='text-justify text-xl mx-5 mb-2 p-3 bg-sky-300 rounded-xl text-cyan-700 font-bold' >
            <p>Our partners include governments, civil society organisations, faith communities, faith-based organisations, businesses, academia, and more</p><br />
          </div>
          <div className='flex flex-col sm:grid md:grid-cols-[1fr_1fr] gap-5 m-2'>
            <div className="border px-10 md:px-16 py-5 flex flex-col gap-5 shadow-lg shadow-blue-700 ">
              <div className='flex justify-center w-40 bg-white rounded-full'>
                <img className='w-32 bg-white rounded-full' src={assets.partner_expand} alt="" />
              </div>
              <p className='text-center text-xl p-3 bg-sky-300 rounded-full text-cyan-700 font-bold'>Expand Your Reach</p>
              <p className='text-center p-1 px-2 bg-sky-300 rounded-lg text-cyan-700 font-bold'>With just a few clicks you can save time and resources where it counts, helping your organization to meet its broader business goals.</p>
            </div>
            <div className="border px-10 md:px-16 py-5 flex flex-col gap-5 shadow-lg shadow-blue-700">
              <div className='flex justify-center w-40 bg-white rounded-full'>
                <img className='w-32' src={assets.vision_icon} alt="" />
              </div>
              <p className='text-center text-xl p-3 bg-sky-300 rounded-full text-cyan-700 font-bold'>Boost your Fundraise</p>
              <p className='text-center p-1 px-2 bg-sky-300 rounded-lg text-cyan-700 font-bold'>We can build and support community-centered services to provide opportunities for those who deserve it and empower them to be a better version of themselves.</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col sm:grid md:grid-cols-[1fr_1fr] gap-5 m-2 rounded-xl bg-indigo-300'>
          <div className='mt-5 ml-5'>
            <Title text1={'FOUNDER’S'} text2={'MESSAGE'} />
            <div className='text-justify text-xl p-3 m-3 bg-sky-300 rounded-xl text-cyan-700 font-bold' >
              <p className='text-justify text-xl p-3 bg-sky-300 rounded-full text-cyan-700 font-bold'>Why trust Eraah?</p>
              <p className='text-left p-1 px-2 bg-sky-300 rounded-lg text-cyan-700 font-bold'>We have always looked at social causes such as poverty alleviation, female empowerment, and education as key issues that were worth solving and I believe anyone can be part of the solution.<br/><br/> <span className='text-sky-900'>Shrey Bansal</span><br/>Founder of Eraah</p>
            </div>
          </div>
          <img className='w-full p-5' src={assets.partner_man} alt="" />
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
  )
}

export default Partner
