import React from 'react'
import './header.css'
import calltoaction from './CallToAction'
import CallToAction from './CallToAction'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Hi my name is Ben Westphal</h1>
        <h5 className="text-light">Computer Science Student</h5>
        <CallToAction />
      </div>
    </header>
  )
}

export default Header