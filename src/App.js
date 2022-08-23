//import Header from './assets/components/Header';
// import Cardlist from './assets/components/Cardlist';
// import Footer from './assets/components/Footer';
import React, { Component } from 'react'
import './App.css'
import AppHeader from './assets/components/AppHeader.jsx'
import { Switch, Route } from 'react-router'
import Footer from './assets/components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Switch>
          <Route path="/about">
            <div>about</div>
          </Route>
          <Route path="/about/home">
            <div>home</div>
          </Route>
        </Switch>
        <Route path="/sobre">
          <Footer />
        </Route>
      </div>
    )
  }
}

export default App

