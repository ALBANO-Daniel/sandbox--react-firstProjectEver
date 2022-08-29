import React from 'react'
import logo from '../../logo.svg'
import { MobileNavigationButton } from './MobileNavigationButton'
import NavigationMenuList from './NavigationMenuList'

export default function AppHeader() {
  // const [count, setCount] = React.useState(0)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const toggleMenuOpen = React.useCallback(() => setIsMenuOpen(!isMenuOpen), [isMenuOpen])
  return (
    <div className="header">
      <div className="App-marca">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React!</h2>
        {/* <button onClick={() => setCount(count + 1)}>Increase count</button> */}
      </div>
      <nav id="nav" className={isMenuOpen ? 'active' : ''}>
        <MobileNavigationButton onClick={toggleMenuOpen} />
        <NavigationMenuList />
      </nav>
    </div>
  )
}

