import React from 'react'
import sideImage from '../../assets/image/coding.jpg'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import ss from '../../assets/image/backs.png'

const back = `const express = require("express")
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
     res.send("WECOME TO OUR CODE.");
})

app.listen(4000,function(){
    console.log('SERVER IS STRATING FOR 4000 PROT NUMBER.')
})`

const Backendsite = () => {
    return (
        <div className=' bg-green-500 w-full'>
            <div className='flex justify-around items-center'>
                <div className=' lg:w-[50%] flex flex-col gap-y-5'>
                    <h1 className=' text-3xl tracking-wide font-bold'>Easy To Use Backendsite Code & Zero Logical Error</h1>
                    <p className=' max-w-3xl mx-auto'>An easy-to-use backend site should have a clean architecture, proper error handling, and optimized database queries to ensure zero logical errors. It should be built using reliable frameworks like Node.js (Express), Django, or Laravel, with authentication, API documentation, and automated testing for smooth performance.</p>
                    <button className=' p-3  px-5 bg-white text-black'>We will help</button>
                </div>
                <div className='w-1/2'>
                       <img src={sideImage} alt="" />
                </div>
            </div>
            <div className='flex justify-between px-32 py-20 bg-gray-500'>
                <div className=' text-start space-y-10'>
                     <h1 className='text-3xl text-yellow-200'>1) Basic Progarm Front of You In Node Js</h1>
                     <SyntaxHighlighter style={atelierCaveDark} wrapLongLines customStyle={{ borderRadius: "5px", padding: "20px" }} >
                        {back}
                     </SyntaxHighlighter>
                </div>
                <div className=' w-1/2 space-y-10'>
                      <h1 className='text-3xl text-yellow-200'>Output On Google Crome</h1>
                      <div>
                           <img src={ss} alt="" />
                      </div>
                </div>
            </div>
        </div>
    )
}

export default Backendsite
