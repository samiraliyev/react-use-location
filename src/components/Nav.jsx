import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <ul className='nav-menu'>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/profil">Pofil</NavLink>

    </ul>
  )
}

export default Nav