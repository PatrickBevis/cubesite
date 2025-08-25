import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { calculateAge } from '../components/age'
const AboutView = () => {
  const birthDateString = "1989-10-23"; // Votre date de naissance
  const age = calculateAge(birthDateString);
  return (
    <>
    <Navbar />
    

 
    <div>
      <p className='text-gray-50'>Mon âge est {age} ans.</p>
    </div>
  


      <Footer />
    </>
  )
}

export default AboutView
