import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact.jsx'

const Contacts = () => {
  return (
    <div>
        <Navbar/>
        <div className=' mt-16  mb-4 '>
        <Contact/>
        </div>
    </div>
  )
}

export default Contacts