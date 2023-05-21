import React from 'react'

const Contact = () => {
  return (
    <div className='flex items-center justify-center h-full w-full'>
      <div className='w-8/12 max-[590px]:w-11/12 md:m-11/12 lg:w-8/12 xl:w-9-12 flex flex-col items-center bg-gray-100 h-[600px] py-6 justify-around rounded-md shadow-xl'>
        <input className='w-11/12 rounded px-5 h-[60px] border focus:outline-yellow-400' type="text" placeholder='FISH' />
        <input className='w-11/12 rounded px-5 h-[60px] border focus:outline-yellow-400' type="email" placeholder='Email' />
        <input className='w-11/12 rounded px-5 h-[60px] border focus:outline-yellow-400' type="text" placeholder='Tel raqam' />
        <input className='w-11/12 rounded px-5 h-[60px] border focus:outline-yellow-400' type="text" placeholder='Holat' />
        <input className='w-11/12 rounded px-5 h-[60px] border focus:outline-yellow-400' type="text" placeholder='Shahar' />
        <textarea className='w-11/12 rounded pt-5 px-5 h-[100px] border focus:outline-yellow-400 resize-none' placeholder='Xabar'/>
        <button className='w-11/12 bg-yellow-400 py-3 rounded-lg text-white '>Yuborish</button>
      </div>
    </div>
  )
}

export default Contact