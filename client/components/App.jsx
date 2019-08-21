import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import NavBar from './NavBar'
import Header from './Header'
import Music from './Music'
import Overview from './Overview'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='app'>
          <Route path="/" component={NavBar} />
          <Route path="/" component={Header} />
          <Route path="/" component={Overview} />
          <Route path="/" component={Music} />
        </div>
      </Router>
    )
  }
}

export default App
