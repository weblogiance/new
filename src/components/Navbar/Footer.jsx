import React from 'react'

const footer = [
  {
    title: "Home",
    navigate: "/"
  },
  {
    title: "Navbar components",
    navigate: "/"
  },
  {
    title: "Button Components",
    navigate: "/"
  },
  {
    title: "Collage level Project",
    navigate: "/"
  },
  {
    title: "Different type of Form",
    navigate: "/"
  },
  {
    title: "Carts components",
    navigate: "/"
  },
  {
    title: "About us",
    navigate: "/"
  },
  {
    title: "Contact Us",
    navigate: "/"
  }
]

const projects = [
     {
        title:"E-commarance",
        navigate:"/"
     },
     {
        title:"Eduction",
        navigate:"/"
     },
     {
        title:"Food Delived",
        navigate:"/"
     },
     {
        title:"Health care",
        navigate:"/"
     }
     
]

const Footer = () => {
  return (
    <div className=' bg-gray-800 text-white py-10'>
        <div className='grid grid-cols-5 gap-x-2 w-11/12 mx-auto'>
            <div className='flex items-start gap-y-5 flex-col justify-center'>
                  <span>LOGO</span>
                  <p className=' text-xs max-w-lg'>We specialize in crafting custom buttons, navbars, and footers tailored to your design and functionality needs. Our solutions ensure seamless integration, responsiveness, and modern aesthetics.</p>
                  {/* <p>Enhance your website's user experience with our high-quality, customizable UI components. Let’s work together to build a sleek and efficient interface!</p> */}
            </div>
            <div>
                <h1 className=' text-purple-500 text-xl underline tracking-wide underline-offset-4'>Our Services</h1>
                 {
                    footer.map((items,index)=>(
                      <ul className='flex flex-col mt-2 text-yellow-50'>
                           <li className=' hover:opacity-80 cursor-pointer'>{items.title}</li>
                      </ul>
                    ))
                 }
            </div>
            <div>
                <h1 className=' text-purple-500 text-xl underline tracking-wide underline-offset-4'>Projects</h1>
                 {
                    projects.map((items,index)=>(
                      <ul className='flex flex-col mt-2 text-yellow-50'>
                           <li className=' hover:opacity-80 cursor-pointer'>{items.title}</li>
                      </ul>
                    ))
                 }
            </div>
            <div>
                <h1 className=' text-purple-500 text-xl underline tracking-wide underline-offset-4'>Team & Condition</h1>
                <ul className='flex flex-col gap-y-2 mt-2 text-yellow-50'>
                  <li className=' hover:opacity-80 cursor-pointer'>Privacy</li>
                  <li className=' hover:opacity-80 cursor-pointer'>Policy</li>
                  
                </ul>
            </div>
            <div className='flex flex-col'>
              
                <h1 className=' text-purple-500 text-xl underline tracking-wide underline-offset-4'>Contact Our Team</h1>
                <div className='mt-2'>
                     <span></span>
                     <span>ankurgohani218@gmail.com</span>
                </div>
                <div className='mt-10'>
                   <input type="email" placeholder='Enter Your Email' className='py-3 px-5 rounded-l-md outline-none border border-gray-500  ' />
                   <button type="button" className='border py-3 px-5 border-gray-500 rounded-r-md bg-black'>Subscribe</button>
               </div>
            </div>
        </div>
        <hr className='w-11/12 mx-auto my-5'/>
        <div className='mx-auto flex items-center  text-center justify-center'>
              <p>Copyright © OurCompanyName all rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
