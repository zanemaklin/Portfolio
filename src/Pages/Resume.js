import React from 'react'
import { Link } from 'react-router-dom'


const Resume = () => {
  return (
    <div>
    <h1>
        Resume
    </h1>
    <div className='content_border-resume'>
    <button className='File-Download'>
      <Link to="/Data/Zane_Maklin_Resume.pdf" target="Resume" download>Download Resume</Link>
    </button>
    </div>
    </div>
  )
}

export default Resume