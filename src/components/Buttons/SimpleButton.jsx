import React from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { FaCode } from "react-icons/fa6";

const code = [
    {},{},{},{}
]

const SimpleButton = () => {
  return (
    <div className='p-5 w-full'>
       <div className=' grid grid-cols-3 mx-auto w-fit gap-10 '>
            {
                code.map((item,index)=>(
                    <section className='flex flex-col'>
                    <div className='border flex items-center justify-center bg-gray-800 lg:w-[442px] lg:h-[242px] rounded-xl  overflow-hidden'>
                       <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
                           Click Me
                       </button>
                    </div>
                    <div className='flex justify-between p-3  items-center'>
                          <span className='flex items-center gap-x-3 cursor-pointer'><FaCode size={29}/>Get Code</span>
                          <div className='flex gap-x-3'>
                              <span className='flex items-center gap-x-1.5 text-xl hover:text-gray-500 cursor-pointer'><AiOutlineLike size={29}/>10</span>
                              <span className='flex items-center gap-x-1.5 text-xl hover:text-gray-500 cursor-pointer'><AiOutlineComment size={29}/>50</span>
                          </div>
                    </div>
               </section>
                ))
            }
       </div>
    </div>
  )
}

export default SimpleButton
