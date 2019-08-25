import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import SideBar from './SideBar'
import Header from './Header'
import Music from './Music'
import Overview from './Overview'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='app'>
          <Route path="/" component={Header} />
          <Route path="/" component={SideBar} />
          <Route path="/" component={Overview} />
          <Route path="/" component={Music} />
        </div>
      </Router>
    )
  }
}

export default App
