import React from 'react'
import { RiCustomSize } from "react-icons/ri";
import { MdFiberSmartRecord } from "react-icons/md";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { atelierForestDark, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


// SyntaxHighlighter.registerLanguage('jsx', jsx); 

const Custom = () => {
    const codeString =
  `const Ecomm = () => {
  const navpro = ["Home", "Products", "New In", "Contact Us", "About Us"];
  return (
    <div className="w-full font-serif mt-10 bg-black text-white py-3 overflow-hidden ">
      <nav className=" w-11/12 flex mx-auto items-center  justify-between  ">
        <div className=" w-1/10">Logo</div>
        <div>
          <ul className=" flex gap-x-5 text-xl tracking-wide ">
            {navpro.map((item, index) => (
              <li key={index} className=" relative group">
                <p className="border px-5 py-0.5  bg-white rounded-sm transition-all duration-200 ease-in-out 
                hover:bg-black hover:text-white text-black border-gray-500 cursor-pointer">
                  {item}
                </p>
                <div className=""></div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex gap-x-5 text-lg tracking-wide">
          <span className=" cursor-pointer">
            <IoLogoGithub size={25} color="" />
          </span>
          <span className=" cursor-pointer">
            <FaXTwitter size={25} color="" />
          </span>
          <span className=" cursor-pointer">
            <FaInstagram size={25} color="" />
          </span>
        </div>
      </nav>
    </div>
  );
};`
    return (
        <div className='flex justify-between w-11/12 '>
            <div className='flex flex-col text-start gap-y-3'>
                <div className=' space-y-3'>
                    <span><RiCustomSize size={55} /></span>
                    <h1 className=' text-yellow-500 mt-3 text-3xl tracking-wide '>All Ready Build Components & Fullliy Customize</h1>
                    <p className=' text-lg max-w-5xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat omnis, unde saepe nobis adipisci quidem placeat illo consectetur dolore corrupti, rerum minus excepturi dolorum blanditiis facere neque nesciunt, optio eaque!</p>
                    <span className='flex gap-x-1.5 items-center text-xl'>View & Your Choice </span>
                </div>
            </div>
            <div className=' max-w-1/2 text-start'>
                <SyntaxHighlighter language="javascript" style={atelierForestDark} showLineNumbers customStyle={{borderRadius:"10px"}}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default Custom
