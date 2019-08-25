import React from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
// import Logo from './Logo'

class NavBar extends React.Component {
  render () {
    return (
      <SideNav className="vertical-sidebar"
        onSelect={(selected) => {
        }
        }
      >

        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="overview">
          <div>
            <p style={{ color: '#FFFFFF', fontFamily: 'OpenSans-SemiBold, Open Sans', fontSize: 20, fontWeight: 500, textAlign: 'center' }} >Data Dashboard</p>
            {/* <img src={require(Logo)} id="home" height='75px' width='75px' display='block' margin-left='auto' margin-right='auto' /> */}
          </div>
          <NavItem eventKey="overview">
            <NavIcon>
              <i className="fa fa-fw fa-home" />
            </NavIcon>
            <NavText style={{ fontFamily: 'OpenSans-SemiBold, Open Sans', fontSize: 16, fontWeight: 500, textAlign: 'left', opacity: 0.6 }} >
                Overview
            </NavText>
          </NavItem>
          <NavItem eventKey="animals">
            <NavIcon>
              <i className="fa fa-fw fa-home" />
            </NavIcon>
            <NavText style={{ fontFamily: 'OpenSans-SemiBold, Open Sans', fontSize: 16, fontWeight: 500, textAlign: 'left', opacity: 0.6 }} >
                Animals
            </NavText>
          </NavItem>
          <NavItem eventKey="food">
            <NavIcon>
              <i className="fa fa-fw fa-home" />
            </NavIcon>
            <NavText style={{ fontFamily: 'OpenSans-SemiBold, Open Sans', fontSize: 16, fontWeight: 500, textAlign: 'left', opacity: 0.6 }} >
                Food
            </NavText>
          </NavItem>
          <NavItem eventKey="music">
            <NavIcon>
              <i className="fa fa-fw fa-line-chart" />
            </NavIcon>
            <NavText style={{ fontFamily: 'OpenSans-SemiBold, Open Sans', fontSize: 16, fontWeight: 500, textAlign: 'left', opacity: 0.6 }} >
                Music
            </NavText>
          </NavItem>
          <NavItem eventKey="settings">
            <NavIcon>
              <i className="fa fa-fw fa-home" />
            </NavIcon>
            <NavText style={{ fontFamily: 'OpenSans-SemiBold, Open Sans', fontSize: 16, fontWeight: 500, textAlign: 'left', opacity: 0.6 }} >
                Settings
            </NavText>
          </NavItem>
          <NavItem eventKey="logout">
            <NavIcon>
              <i className="fa fa-fw fa-home" />
            </NavIcon>
            <NavText style={{ fontFamily: 'OpenSans-SemiBold, Open Sans', fontSize: 16, fontWeight: 500, textAlign: 'left', opacity: 0.6 }} >
                Logout
            </NavText>
          </NavItem>
          <p style={{ fontFamily: 'OpenSans-SemiBold, Open Sans', fontSize: 10, fontWeight: 500, textAlign: 'center', opacity: '0.25' }} >© FireFly 2019</p>
        </SideNav.Nav>
      </SideNav>
    )
  }
}

export default NavBar
