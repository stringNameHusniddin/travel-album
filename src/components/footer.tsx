import React from 'react'
import { SiTelegram } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import { BsFacebook } from 'react-icons/bs'
import { FiPhoneCall } from 'react-icons/fi'

const Footer = () => {
    return (
        <div className='flex w-full items-center bg-white flex-wrap justify-around'>
            <div className='flex flex-col items-center justify-center h-[80px] w-[310px] gap-2'>
                <MdEmail />
                <p>javohiresanov8@gmail.com</p>
            </div>
            <div className='flex flex-col items-center justify-center h-[80px] w-[310px] gap-2 '>
                <SiTelegram />
                <p>@esanovjavohir_2676</p>
            </div>
            <div className='flex flex-col items-center justify-center h-[80px] w-[310px] gap-2 '>
                <BsFacebook />
                <p>_jav0h1r__</p>
            </div>
            <div className='flex flex-col items-center justify-center h-[80px] w-[310px] gap-2 '>
                <FiPhoneCall />
                <p>+998934622676</p>
            </div>
        </div>
    )
}

export default Footer