import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigationMenuList(props) {
  return (
    <ul className="navigation-menu-list">
      <li>
        <Link to="/sobre">Home</Link>
      </li>
      <li>
        <Link to="/produtos">Products</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/contato">
          Contact
          {/* {props.count} */}
        </Link>
      </li>
    </ul>
  )
}
