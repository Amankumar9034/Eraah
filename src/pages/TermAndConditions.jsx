import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'

const TermAndConditions = () => {
  return (
    <div className='bg-gradient-to-b from-white via-sky-300 to-cyan-500 w-full h-full flex flex-col lg:grid md:grid-cols-[1fr_2fr] gap-5 mt-0'>

      <div>
        <img className='w-full opacity-70 m-5' src={assets.tc_icon} alt="" />
      </div>

      <div>
        <div className='text-center text-2xl m-5 border-t'>
          <Title text1={'Terms and'} text2={'Conditions'} />
          <p className='text-center text-xl p-3 bg-sky-300 rounded-xl text-cyan-700 font-bold'>Welcome to Eraah. Before using our logo design service, please carefully review the following Terms and Conditions, as they govern the contractual relationship between you (the "Client") and Eraah (the "Service Provider"). By using our logo design service, you acknowledge that you have read, understood, and agreed to these Terms and Conditions in their entirety.</p>
        </div>
        
        <div className="border px-10 md:px-15 py-5 m-5 flex flex-col gap-5 shadow-lg shadow-blue-700">
          <p className='p-1 px-10 bg-gray-300 rounded-lg text-cyan-800 font-bold'>➡ Scope of Service</p>
          <p className='text-cyan-800 font-semibold'>1. Eraah will provide custom logo design services to the Client based on the specifications provided by the Client.<br /><br />2. The Service Provider will deliver the final logo design in the agreed-upon format upon completion and full payment of the service fee.</p>
        </div>

        <div className="border px-10 md:px-15 py-5 m-5 flex flex-col gap-5 shadow-lg shadow-blue-700">
          <p className='p-1 px-10 bg-gray-300 rounded-lg text-cyan-800 font-bold'>➡ Copyright and Ownership</p>
          <p className='text-cyan-800 font-semibold'>1. 1. The Client acknowledges that all rights, title, and ownership of the final logo design will belong solely to the Client after full payment has been received by the Service Provider.<br /><br />2. Final payment ensures that only the agreed design becomes the client’s property. Any previous ideas/concepts remain the property of The Service Provider, unless any prior agreement has been made.<br /><br />3. The Service Provider reserves the right to showcase the completed logo design in their portfolio or promotional materials.</p>
        </div>

        <div className="border px-10 md:px-15 py-5 m-5 flex flex-col gap-5 shadow-lg shadow-blue-700">
          <p className='p-1 px-10 bg-gray-300 rounded-lg text-cyan-800 font-bold'>➡ Confidentiality</p>
          <p className='text-cyan-800 font-semibold'>1. The Service Provider will treat all information provided by the Client as confidential and will not disclose it to third parties without the Client's explicit consent.<br /><br />2. The Client agrees that the final logo design, once delivered, is no longer considered confidential.</p>
        </div>

        <div className="border px-10 md:px-15 py-5 m-5 flex flex-col gap-5 shadow-lg shadow-blue-700">
          <p className='p-1 px-10 bg-gray-300 rounded-lg text-cyan-800 font-bold'>➡ Governing Law and Dispute Resolution</p>
          <p className='text-cyan-800 font-semibold'>1. These Terms and Conditions shall be governed by the laws of India.<br /><br />2. Any dispute arising from or relating to this agreement shall be settled through good-faith negotiations between the parties. If the dispute cannot be resolved amicably, it shall be submitted to binding arbitration in accordance with the rules of Eraah.</p>
        </div>
        
        <p className='text-cyan-800 font-semibold m-5'>By using Eraah, you agree to abide by these Terms and Conditions. These Terms and Conditions may be updated by Eraah at any time, and the latest version will be made available on our website. It is the Client's responsibility to review these terms periodically for any changes.<br /><br /> If you have any questions or concerns regarding these Terms and Conditions, please contact Eraah at shrey.bansal@errah.org.</p>
      </div>
    </div>
  )
}

export default TermAndConditions
