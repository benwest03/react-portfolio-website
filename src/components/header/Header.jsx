import React from 'react'
import './header.css'
import CallToAction from './CallToAction'
import ME from '../../assets/personalPhoto.png'

const Header = () => {
  return (
    <section id = 'header'>
      <div className="header__container"> 
        
        <div className="header__text__container">
          <h4>Hi my name is</h4>
          <h1>Ben Westphal</h1>
          <h5 className="text-light">Computer Science Student</h5>
          <div className="call-to-action">
            <CallToAction />
          </div>
        </div>

        <div className="image__container">
          <img src = {ME} alt = "Personal Photo" className='img'/>
        </div>
      </div>
    </section>
  )
}

export default Header