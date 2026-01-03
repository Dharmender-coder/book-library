import React from 'react'
import Footer from '../components/Footer'
import Freebook from '../components/Freebook'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Pricing from '../components/Pricing'


function Home() {
  return (
   <>
         <Navbar/>
         <Banner/>
         <Freebook/>
         <Pricing/>
         <Footer/>
   </>
  )
}

export default Home