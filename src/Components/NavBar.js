import React from 'react'
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
      <nav className="nav">
        <Link to="/"><div className="site-name"><img className= "NavLogo" src="/Logo_001.svg" alt="logo"/>Zane Maklin</div></Link>
        
        <ul>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/Resume">Resume</Link>
            </li>
            <li>
              <Link to="/Gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/Building">Construction</Link>
            </li>
        </ul>
      </nav>
  )
}

export default NavBar
