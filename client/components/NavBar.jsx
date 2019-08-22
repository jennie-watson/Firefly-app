import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import Sidebar from 'react-sidebar'

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
      <div id="vertical-sidebar">
        <Container id="container-sidebar">
          <Sidebar
            sidebar={
        <>
          <Nav-Headers className="nav-text">
            <b>Data Dashboard</b>
            &nbsp;
            &nbsp;
          </Nav-Headers>
          <div id="nav-text">
            <Nav.Link eventKey="/home">Overview</Nav.Link>
            <Nav.Link eventKey="/animals">Animals</Nav.Link>
            <Nav.Link eventKey="/food">Food</Nav.Link>
            <Nav.Link eventKey="/music">Music</Nav.Link>
            <Nav.Link eventKey="/settings">Settings</Nav.Link>
            <Nav.Link eventKey="/logout">Logout</Nav.Link>
          </div>
          <h6 id="copyright">© FireFly 2019</h6>
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
