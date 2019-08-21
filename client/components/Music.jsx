import React from 'react'
import { Card, Container, Col, Row, Nav, DropdownButton, Dropdown, ListGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

class Music extends React.Component {
  render () {
    return (
      <Container className="card-footer">
        <Row>
          <Col>
            <Card>
              <Card.Footer>
                <Col>
                  <Nav variant="tabs" defaultActiveKey="#first">
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
                  <Card.Title className="order-button">Order by</Card.Title>
                  <DropdownButton id="dropdown-item-button" title="Most played">
                    <Dropdown.Item as="button">Artist</Dropdown.Item>
                    <Dropdown.Item as="button">Songs</Dropdown.Item>
                    <Dropdown.Item as="button">Moods</Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Card.Footer>
              <Card.Body>
                <Container>
                  <Row>
                    <Col>
                      <Card.Title># ARTIST</Card.Title>
                      <ListGroup variant="flush">
                        <ListGroup.Item><ol className="i-block">1</ol>The Wiggles</ListGroup.Item>
                        <ListGroup.Item><ol>2</ol>Dolly Parton</ListGroup.Item>
                        <ListGroup.Item><ol>3</ol>Wellington International Ukelele Orchestra</ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col>
                      <Card.Title>PLAYS</Card.Title>
                      <ListGroup variant="flush">
                        <ListGroup.Item>86,340</ListGroup.Item>
                        <ListGroup.Item>86,333</ListGroup.Item>
                        <ListGroup.Item>85,023</ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col>
                      <Card.Title>SONGS</Card.Title>
                      <ListGroup variant="flush">
                        <ListGroup.Item>189</ListGroup.Item>
                        <ListGroup.Item>244</ListGroup.Item>
                        <ListGroup.Item>12</ListGroup.Item>
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
