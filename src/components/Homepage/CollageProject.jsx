import React from 'react'
import { GoProject } from "react-icons/go";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import im11 from '../../assets/image/dev.jpg'
import im12 from '../../assets/image/doc.jpg'
import im131 from '../../assets/image/pre.jpg'

const CollageProject = () => {
  return (
    <div className='my-10'>
        <div className='flex flex-col mx-auto items-center gap-y-5'>
             <div className=' w-20 h-20  bg-yellow-500 rotate-45 flex items-center justify-center'>
                 <GoProject size={55}/>
             </div>
            <h1 className='text-yellow-400 tracking-wide text-4xl font-semibold'>Collage level Project with all Documents</h1>
            <p className=' max-w-5xl'>A college-level project typically includes a detailed report, presentation, and supporting documents. It involves problem identification, research, methodology, implementation, and results analysis. Essential documents include a project proposal, SRS (Software Requirement Specification), design documents, test cases, and a final report. The project should demonstrate technical skills, problem-solving abilities, and innovation. Proper documentation ensures clarity, future scalability, and effective presentation.</p>
            <p className='flex items-center gap-x-2'>One Project buy  + <span className=' text-purple-300'> one mani project Free</span><RiVerifiedBadgeFill className=' text-purple-300'/></p>
            <div>
                <button type="button">Buy Now</button>
            </div>
            <div className='w-full'>
                 <div className='w-8/12 flex px-10 gap-x-2  '>
                    <img src={im11} alt="" className='w-1/2 rounded-xl'></img>
                    <img src={im12} alt="" className='w-1/2 rounded-xl' />
                    <img src={im131} alt="" className='w-1/2  rounded-xl'/>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default CollageProject
