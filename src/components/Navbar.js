import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
   <nav className='nav'>
    <a href='/' className='site-title'>
      site Name
    </a>
    <ul>
      <li>
        <a href='/pricing'>PRICING</a>
      </li>
      <li>
        <a href='/about'>ABOUT</a>
        </li>

    </ul>
   </nav>
  )
}
