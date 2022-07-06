import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import './index.css'


const App = () => {
  return (
    <>
        <Navbar />
        <Header />
        <About />
        <Contact />
        <Experience />
        <Portfolio />
        <Services />
        <Testimonials />
        <Footer />
    </>
  )
}

export default App