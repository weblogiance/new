import React from 'react'
import { IoIosRadioButtonOn, IoMdArrowForward } from "react-icons/io";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import CustomBtnbutton from './CustomBtnbutton';

const Buttonsection = () => {
  const reactcode = `<div className='flex gap-x-3'>
     <button type="button" className='border px-5 py-2 rounded-md'>Button A</button>
     <button type="button" className='border hover:border-blue-500 transition-all duration-200 ease-linear hover:text-blue-500 px-5 py-2 rounded-md'>Button B</button>
     <button type="button" className='border hover:border-blue-500 transition-all duration-200 ease-linear hover:bg-blue-500 px-5 py-2 rounded-md'>Button C</button>
</div>`

  const htmlcode = `   <div class="button-container">
        <button class="btn">Button A</button>
        <button class="btn btn-b">Button B</button>
        <button class="btn btn-c">Button C</button>
    </div>`

  const csscode =
    `      .button-container {
            display: flex;
            gap: 12px;
        }
        .btn {
            border: 1px solid black;
            padding: 8px 20px;
            border-radius: 6px;
            background: transparent;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
        }
        .btn-b:hover {
            border-color: blue;
            color: blue;
        }
        .btn-c:hover {
            border-color: blue;
            background-color: blue;
            color: white;
        }`
  return (
    <div>
      <div className=' w-11/12 mx-auto my-10 flex gap-12 justify-between '>
        <div className='w-1/2 flex flex-col items-start gap-y-3 overflow-hidden'>
          <span><IoIosRadioButtonOn size={55} color='yellow' /></span>
          <span className='text-yellow-400 tracking-wide text-3xl font-semibold'>Custom Buttons and Betifull color or Design</span>
          <p className=' text-start max-w-3xl'>We specialize in crafting custom buttons with stunning colors and unique designs to enhance your website's aesthetics. Our creations blend functionality with eye-catching visuals, ensuring seamless user experiences. Elevate your brand with beautifully designed UI elements tailored to your needs.</p>
          <button className='flex items-center gap-x-2'>View all Button <IoMdArrowForward size={20} /></button>
          <div className='flex gap-x-3 my-10'>
            <button type="button" className='border px-5 py-2 rounded-md'>Button A</button>
            <button type="button" className='border hover:border-blue-500 transition-all duration-200 ease-linear hover:text-blue-500 px-5 py-2 rounded-md'>Button B</button>
            <button type="button" className='border hover:border-blue-500 transition-all duration-200 ease-linear hover:bg-blue-500 px-5 py-2 rounded-md'>Button C</button>
          </div>
          <div className='flex flex-col gap-y-3 text-start'>
            <h1>React Js</h1>
            <SyntaxHighlighter style={atelierCaveLight} wrapLongLines customStyle={{ borderRadius: "5px", padding: "20px" }} >
              {reactcode}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className='flex flex-col  gap-10 w-1/2'>
          <div className='flex flex-col gap-y-3 text-start'>
            <h1>HTML</h1>
            <SyntaxHighlighter style={atelierCaveLight} wrapLongLines customStyle={{ borderRadius: "5px", padding: "20px" }} >
              {htmlcode}
            </SyntaxHighlighter>
          </div>
          <div className='flex flex-col   gap-y-3 text-start'>
            <h1>CSS</h1>
            <SyntaxHighlighter style={atelierCaveLight} wrapLongLines customStyle={{ borderRadius: "5px", padding: "20px" }} >
              {csscode}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
      <CustomBtnbutton/>
    </div>
  )
}

export default Buttonsection
