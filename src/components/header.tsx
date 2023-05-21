import {AiOutlineHome} from 'react-icons/ai'
import {TiInfoLargeOutline} from 'react-icons/ti'
import {MdMiscellaneousServices} from 'react-icons/md'
import {FiPhoneCall} from 'react-icons/fi'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="flex w-full  h-[80px] items-center bg-white fixed bottom-0 z-50 " >
            <Link to='/' className="flex flex-col items-center justify-center hover:bg-green-400 hover:text-white h-full w-3/12 gap-1">
                <AiOutlineHome/>
                <p>Home</p>
            </Link>
            <Link to='/services' className="flex flex-col items-center justify-center hover:bg-purple-400 hover:text-white h-full w-3/12 gap-1">
                <MdMiscellaneousServices/>
                <p>Xizmatlar</p>
            </Link>
            <Link to='/contact' className="flex flex-col items-center justify-center hover:bg-yellow-400 hover:text-white h-full w-3/12 gap-1">
                <FiPhoneCall/>
                <p>Aloqa</p>
            </Link>
            <Link to='/about' className="flex flex-col items-center justify-center hover:bg-red-400 hover:text-white h-full w-3/12 gap-1">
                <TiInfoLargeOutline/>
                <p>Haqimizda</p>
            </Link>
        </div>
    )
}

export default Header