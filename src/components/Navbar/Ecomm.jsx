import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Ecomm = () => {
    const navpro = ["Home", "Products", "New In", "Contact Us", "About Us"]
    return (
        <div className='w-full font-serif  bg-purple-900 z-[999]  sticky top-0 text-white py-5 overflow-hidden '>
            <nav className=' w-11/12 flex mx-auto items-center  justify-between  '>
                <div className=' w-1/10'>
                    Logo
                </div>
                <div>
                    <ul className=' flex gap-x-5 text-xl tracking-wide '>
                        {
                            navpro.map((item, index) => (
                                <li key={index} className=' relative group'>
                                    <p className=' px-5 py-0.5  bg-white rounded-sm    transition-all duration-200 ease-in-out hover:bg-purple-950 hover:text-white text-black border-gray-500 cursor-pointer'>{item}</p>
                                    <div className=''>

                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='relative flex gap-x-5 text-lg tracking-wide'>
                     <span className=' cursor-pointer'><IoLogoGithub size={25} color=''/></span>
                     <span className=' cursor-pointer'><FaXTwitter size={25} color=''/></span>
                     <span className=' cursor-pointer'><FaInstagram size={25} color=''/></span>
                </div>
            </nav>
        </div>
    )
}

export default Ecomm
