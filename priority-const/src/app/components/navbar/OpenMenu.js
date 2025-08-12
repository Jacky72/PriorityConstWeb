import React from 'react'
import NavLink from './NavLink'

const OpenMenu = ({ links }) => {
  return (
    <ul className="flex flex-col navbar-font py-4 items-center"> 
        {links.map((link, index) => (
            <li key={index} className="underline decoration-2 underline-offset-3">
                <NavLink href={link.path} title={link.title} />
            </li>
        ))} 
    </ul>
  ) 
}

export default OpenMenu