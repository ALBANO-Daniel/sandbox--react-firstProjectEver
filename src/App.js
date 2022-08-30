//import Header from './assets/components/Header';
// import Cardlist from './assets/components/Cardlist';
// import Footer from './assets/components/Footer';
import React, { Component } from 'react'
import './App.css'
import AppHeader from './assets/components/AppHeader.jsx'
import { Switch, Route } from 'react-router'
import Footer from './assets/components/footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Switch>
          <Route path="/">
            <div>the home</div>
          </Route>
          <Route path="/products">
            <div>Our Products</div>
          </Route>
          <Route path="/portfolio">
            all portfolio
          </Route>
          <Route path="/about">
            About Us!
          </Route>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App

