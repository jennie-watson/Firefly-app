import React from 'react'
import { Container, Nav, Text } from 'react-bootstrap'
import Sidebar from 'react-sidebar'
import Logo from './Logo'

const mql = window.matchMedia(`(min-width: 800px)`)

class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this)
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount () {
    mql.addListener(this.mediaQueryChanged)
  }

  componentWillUnmount () {
    this.state.mql.removeListener(this.mediaQueryChanged)
  }

  onSetSidebarOpen (open) {
    this.setState({ sidebarOpen: open })
  }

  mediaQueryChanged () {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false })
  }

  render () {
    return (
      <div className="wrapper">
        <Container className='vertical-sidebar'>
          <Sidebar
            sidebar={
        <>
        <div className="container">
          <div className="sidebar-header">
            <Logo />
            <b>Data Dashboard</b>
          </div>
          {/* <img src={require('../../server/public/Images/ff_logo.png' /> */}
          <Nav.Link eventKey="/home">Overview</Nav.Link>
          <Nav.Link eventKey="/animals">Animals</Nav.Link>
          <Nav.Link eventKey="/food">Food</Nav.Link>
          <Nav.Link eventKey="/music">Music</Nav.Link>
          <Nav.Link eventKey="/settings">Settings</Nav.Link>
          <Nav.Link eventKey="/logout">Logout</Nav.Link>
        </div>
        </>
            }
            open={this.state.sidebarOpen}
            docked={this.state.sidebarDocked}
            onSetOpen={this.onSetSidebarOpen}
          >
          </Sidebar>
        </Container>
      </div>
    )
  }
}

export default NavBar
