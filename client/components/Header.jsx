import React from 'react'
import { Col, Row, Container, ButtonToolbar, Button, Card } from 'react-bootstrap'

class Header extends React.Component {
  render () {
    return (
      <Container className="container-header">
        <Row>
          <Col>
            <Card.Header>
              <Card.Body>
                <Card.Title className="header-title">Welcome!</Card.Title>
                <Card.Text className="header-text">Before you get too carried away, do you agree to us collecting anonimized statistics about your usage of our app?</Card.Text>
                <ButtonToolbar className="stats-button">
                  <Button className="stats-button1" type="submit">I Disagree</Button>
                    &nbsp;
                    &nbsp;
                  <Button className="stats-button2" type="submit">I Agree</Button>
                </ButtonToolbar>
              </Card.Body>
            </Card.Header>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Header
