import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarItem({ item }) {
  return (
    <li>
      <NavLink to={item.path} className={`flex items-center space-x-[20px]`}>
        {item.icon}
        <strong className="text-[18px] font-semibold">{item.title}</strong>
      </NavLink>
    </li>
  )
}

export default NavbarItem
