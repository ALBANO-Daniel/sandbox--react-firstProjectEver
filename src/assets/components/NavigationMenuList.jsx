import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigationMenuList(props) {
  return (
    <ul className="navigation-menu-list">
      <li>
        <Link to="/sobre">Sobre</Link>
      </li>
      <li>
        <Link to="/produtos">Produtos</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/contato">
          Contato
          {props.count}
        </Link>
      </li>
    </ul>
  )
}
