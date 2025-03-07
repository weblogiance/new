
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'

import Ecomm from './components/Navbar/Ecomm';
import HomePage from './Page/HomePage';
import Footer from './components/Navbar/Footer';



function App() {

  return (
   
      <div className=' font-serif'>
        <Ecomm/>
        <Routes>
            <Route path='/' element={<HomePage/>} />
        </Routes>
        <Footer/>
      </div>
   
  )
}

export default App

