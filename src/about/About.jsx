import React from 'react'
import Navbar from '../components/Navbar'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
        <Navbar/>
        <div className='bg-gray-300 mt-8 mb-4 '>
        <AboutUs/>
        </div>
        <Footer/>
    </div>
  )
}

export default About