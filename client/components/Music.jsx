import React from 'react'
import { Button, Card, Container, Col, Row, Nav, DropdownButton, Dropdown, ListGroup, MDBIcon } from 'react-bootstrap'
import { ICON_NAME } from 'react-icons/md'

class Music extends React.Component {
  render () {
    return (
      <Container className="card-footer">
        <Row>
          <Col>
            <Card>
              <Col>
                <Nav variant="tabs" defaultActiveKey="#first" className="music-tabs">
                  <Nav.Item>
                    <Nav.Link href="#first">Artists</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#second">Songs</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#third">Moods</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col>
                <DropdownButton id="dropdown-item-button" title="Most played">
                  <Dropdown.Item as="button">Artist</Dropdown.Item>
                  <Dropdown.Item as="button">Songs</Dropdown.Item>
                  <Dropdown.Item as="button">Moods</Dropdown.Item>
                </DropdownButton> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Card.Title className="order-by">Order by</Card.Title>
              </Col>
              <Card.Body>
                <Container fluid>
                  <Row>
                    <Col>
                      <Card.Title className="artist-title"># ARTIST</Card.Title>
                      <ListGroup variant="flush" className="artist-list">
                        <ListGroup.Item><b className="number">1</b>&nbsp;&nbsp;&nbsp;The Wiggles</ListGroup.Item>
                        <ListGroup.Item><b className="number">2</b>&nbsp;&nbsp;&nbsp;Dolly Parton</ListGroup.Item>
                        <ListGroup.Item><b className="number">3</b>&nbsp;&nbsp;&nbsp;Wellington International Ukelele Orchestra</ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col>
                      <Card.Title className="plays-title">PLAYS</Card.Title>
                      <ListGroup variant="flush" className="plays-list">
                        <ListGroup.Item>86,340</ListGroup.Item>
                        <ListGroup.Item>86,333</ListGroup.Item>
                        <ListGroup.Item>85,023</ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col>
                      <Card.Title className="songs-title">SONGS</Card.Title>
                      <ListGroup variant="flush" className="songs-list">
                        <ListGroup.Item>189 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="material-icons">delete</i></ListGroup.Item>
                        <ListGroup.Item>244 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="material-icons">delete</i></ListGroup.Item>
                        <ListGroup.Item>12 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="material-icons">delete</i></ListGroup.Item>
                      </ListGroup>
                    </Col>
                  </Row>
                </Container>
                <Button className="music-button" variant="primary">View more music data</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Music
