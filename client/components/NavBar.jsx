import React from 'react'
import { Container, Col, Nav, Row } from 'react-bootstrap'
import Sidebar from 'react-sidebar'
// import { ReactComponent as Logo } from '../../server/public/Icons/ff_logo.svg'

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
      <Container className='vertical-sidebar'>
        <Row>
          {/* <Col> */}
          <Sidebar
            sidebar={
        <>
        <div className="container">
          {/* <Logo /> */}
          <Nav.Link href="/home">Data Dashboard</Nav.Link>
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
          {/* </Col> */}
        </Row>
      </Container>
    )
  }
}

export default NavBar
