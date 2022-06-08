import React from 'react'
import resume from '../../assets/resume.pdf'

const CallToAction = () => {
  return (
    <div className='cta'>
        <a href={resume} download> Download Resume</a>
        <a href="#contact"> Let's Talk</a>
    </div>
  )
}

export default CallToAction
