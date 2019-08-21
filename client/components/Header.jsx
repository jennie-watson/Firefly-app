import React from 'react'
import { Col, Row, Container, Button, Card } from 'react-bootstrap'

class Header extends React.Component {
  render () {
    return (
      <Container className="card-header">
        <Row>
          <Col>
            <Card className="d-block">
              <Card.Header>
                <Card.Body>
                  <Card.Title>Welcome!</Card.Title>
                  <Card.Text>Before you get too carried away, do you agree to us collecting anonimized statistics about your usage of our app?</Card.Text>
                  <Button>Disagree</Button>
                  <Button>I agree</Button>
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
