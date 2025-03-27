import React, { useState } from 'react';
import sideImage from '../../assets/image/coding.jpg'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import ss from '../../assets/image/backs.png'

import { Terminal, Package, Smartphone, Layout, Globe, Code2, Server, ChevronDown, ChevronUp } from 'lucide-react';


const back = `const express = require("express")
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
     res.send("WECOME TO OUR CODE.");
})

app.listen(4000,function(){
    console.log('SERVER IS STRATING FOR 4000 PROT NUMBER.')
})`


function GuideStep({
    number,
    title,
    description,
    detailedSteps,
    image,
    icon: Icon
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-all duration-300"
            >
                <div className="flex gap-4 items-center">
                    <div className="flex-shrink-0">
                        <div className={`w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center transform transition-all duration-300 ${isOpen ? 'scale-110 bg-indigo-200' : ''}`}>
                            <Icon className={`w-6 h-6 text-indigo-600 transition-all duration-300 ${isOpen ? 'scale-110' : ''}`} />
                        </div>
                    </div>
                    <div className="text-left">
                        <h3 className={`text-xl font-semibold transition-colors duration-300 ${isOpen ? 'text-indigo-600' : 'text-gray-800'}`}>
                            {number}. {title}
                        </h3>
                        <p className="text-gray-600 mt-1">{description}</p>
                    </div>
                </div>
                <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? (
                        <ChevronUp className="w-6 h-6 text-indigo-600" />
                    ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                </div>
            </button>

            <div
                className={`transition-all duration-500 ease-in-out ${isOpen
                        ? 'max-h-[1000px] opacity-100'
                        : 'max-h-0 opacity-0'
                    } overflow-hidden`}
            >
                <div className="px-6 pb-6 transform transition-all duration-500">
                    <div className="rounded-lg overflow-hidden mb-4 transform transition-all duration-500 translate-y-0">
                        <img
                            src={image}
                            alt={title}
                            className={`w-full h-[300px] object-cover transition-all duration-500 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                                }`}
                        />
                    </div>
                    <ul className="space-y-3">
                        {detailedSteps.map((step, index) => (
                            <li
                                key={index}
                                className={`flex items-start gap-2 transform transition-all duration-500 ${isOpen
                                        ? 'translate-x-0 opacity-100'
                                        : 'translate-x-4 opacity-0'
                                    }`}
                                style={{
                                    transitionDelay: `${index * 100}ms`
                                }}
                            >
                                <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-sm font-medium text-indigo-600">{index + 1}</span>
                                </div>
                                <p className="text-gray-700">{step}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

const Backendsite = () => {
    const steps = [
        {
            icon: Terminal,
            title: "Initialize Your Project",
            description: "Set up your Node.js development environment",
            image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=1200",
            detailedSteps: [
                "Create a new directory for your project using 'mkdir your-project-name'",
                "Navigate into the project directory using 'cd your-project-name'",
                "Initialize a new Node.js project with 'npm init -y'",
                "Open your favorite code editor to start development"
            ]
        },
        {
            icon: Package,
            title: "Install Dependencies",
            description: "Set up essential packages for your web application",
            image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&q=80&w=1200",
            detailedSteps: [
                "Install Express.js framework: 'npm install express'",
                "Add development dependencies: 'npm install nodemon --save-dev'",
                "Install middleware packages like cors and body-parser",
                "Set up environment variables with dotenv package"
            ]
        },
        {
            icon: Code2,
            title: "Create Server Configuration",
            description: "Set up your Express server and configure routes",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
            detailedSteps: [
                "Create an index.js file as your entry point",
                "Import and configure Express and middleware",
                "Set up your API routes and controllers",
                "Implement error handling middleware"
            ]
        },
        {
            icon: Layout,
            title: "Design Responsive UI",
            description: "Create a mobile-first responsive interface",
            image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&q=80&w=1200",
            detailedSteps: [
                "Set up your frontend framework (React, Vue, etc.)",
                "Implement mobile-first CSS using media queries",
                "Create reusable components for consistent design",
                "Test layouts across different breakpoints"
            ]
        },
        {
            icon: Smartphone,
            title: "Test Across Devices",
            description: "Ensure compatibility across all platforms",
            image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1200",
            detailedSteps: [
                "Use browser developer tools to test different screen sizes",
                "Test on real mobile devices when possible",
                "Verify touch interactions work correctly",
                "Check performance on slower connections"
            ]
        },
        {
            icon: Server,
            title: "Deploy Application",
            description: "Launch your application to production",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
            detailedSteps: [
                "Choose a hosting provider (Heroku, DigitalOcean, etc.)",
                "Set up environment variables in production",
                "Configure your domain and SSL certificate",
                "Set up monitoring and logging"
            ]
        }
    ];
    return (
        <div className=' bg-sky-500 w-full'>
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
            <div className='flex justify-between items-start  bg-sky-400'>
                <div className=' text-start w-1/2  px-10 pt-10 space-y-10 mx-auto'>
                    <h1 className='text-3xl text-yellow-200'>1) Basic Progarm Front of You In Node Js</h1>
                    <SyntaxHighlighter style={atelierCaveDark} wrapLongLines customStyle={{ borderRadius: "5px", padding: "20px" }} >
                        {back}
                    </SyntaxHighlighter>
                    <div>
                         <img src={ss} alt="" />
                    </div>
                </div>
                <div className=' w-1/2  space-y-10'>
                    <div className="min-h-screen bg-gray-50">
                        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                    Building Node.js Web Applications
                                </h1>
                                <p className="text-xl text-gray-600">
                                    A comprehensive guide to creating responsive and scalable web applications
                                    with Node.js. Click each step to learn more.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {steps.map((step, index) => (
                                    <GuideStep
                                        key={index}
                                        number={index + 1}
                                        title={step.title}
                                        description={step.description}
                                        detailedSteps={step.detailedSteps}
                                        image={step.image}
                                        icon={step.icon}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backendsite
