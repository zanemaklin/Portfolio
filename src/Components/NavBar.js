import React from 'react'
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
      <nav className="nav">
        <ul>
            <li>
              <Link to="/"><img className= "NavLogo" src="/Logo_001.svg" alt="logo"/></Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/Resume">Resume</Link>
            </li>
            <li>
              <Link to="/Building">Construction</Link>
            </li>
        </ul>
      </nav>
  )
}

export default NavBar
