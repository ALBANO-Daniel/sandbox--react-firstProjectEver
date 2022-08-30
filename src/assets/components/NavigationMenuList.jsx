import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigationMenuList(props) {
  return (
    <ul className="navigation-menu-list">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/about">About{/* {props.count} */}</Link>
      </li>
    </ul>
  )
}
