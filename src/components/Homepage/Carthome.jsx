import React from 'react'
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { BiSolidDownload } from "react-icons/bi";
import { RiShareFill } from "react-icons/ri";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";

const demo = [
    {
        photo: "",
        Name: "",
        descripttion: "",
        icons: [AiFillLike, AiFillLike, BiSolidDownload, RiShareFill]
    },
    {
        photo: "",
        Name: "",
        descripttion: "",
        icons: [AiFillLike, AiFillLike, BiSolidDownload, RiShareFill]
    },
    {
        photo: "",
        Name: "",
        descripttion: "",
        icons: [AiFillLike, AiFillLike, BiSolidDownload, RiShareFill]
    }
]

const Carthome = () => {
    return (
        <div className='my-10'>
            <div className=' flex flex-col items-baseline gap-y-2 my-5'>
                  <div className=' w-24 h-24 bg-green-500 rounded-full  flex items-center justify-center'><RiCheckboxMultipleBlankFill size={65}/></div>
                 <h1 className='text-3xl font-semibold tracking-wide text-green-600'>Custome Cart & Responsive and Easy to use</h1>
                 <p className='max-w-xl text-justify text-gray-500'>We specialize in crafting custom buttons with stunning colors and unique designs to enhance your website's aesthetics. Our creations blend functionality with eye-catching visuals, ensuring seamless user experiences. Elevate your brand with beautifully designed UI elements tailored to your needs.</p>
            </div>
            <div className='grid grid-cols-3 gap-x-10'>
                {
                    demo.map((demos) => (
                        <div className='flex flex-col items-start gap-y-3 border p-2'>
                            <div className=' w-[510px] h-[340px] overflow-hidden border'>
                                <img src="https://img.freepik.com/free-photo/green-iguana-closeup-wood-animal-closeup-reptile-closeup_488145-2581.jpg?t=st=1741579693~exp=1741583293~hmac=98e9008b3a5fd7d201b03d2c0586bee132a12e2c5a72d29dd8728b2c11069d12&w=1060" alt="" />
                            </div>
                            <h1>Title of Year's</h1>
                            <p className=' max-w-lg text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, mollitia. Numquam, mollitia maiores hic reiciendis quas nam molestiae facere perspiciatis illum! Aut?</p>
                           
                            <div className='flex gap-x-2 text-2xl'>
                                <span><AiFillLike/></span><span></span><BiSolidDownload/><span><RiShareFill/></span>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Carthome
