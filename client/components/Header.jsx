import React from 'react'
import { Col, Row, Container, ButtonToolbar, Button, Card } from 'react-bootstrap'

class Header extends React.Component {
  render () {
    return (
      <Container className="card-header">
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Body>
                  <Card.Title>Welcome!</Card.Title>
                  <Card.Text>Before you get too carried away, do you agree to us collecting anonimized statistics about your usage of our app?</Card.Text>
                  <ButtonToolbar className="stats-button">
                    <Button type="submit">&#10005; I Disagree</Button>
                    &nbsp;
                    &nbsp;
                    <Button type="submit"> &#10003; I Agree</Button>
                  </ButtonToolbar>
                </Card.Body>
              </Card.Header>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Header
