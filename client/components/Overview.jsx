import React from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'

class Overview extends React.Component {
  render () {
    return (
      <Container className="card-main">
        <Row>
          <Col>
            <Card className="d-block">
              <Card.Body>
                <Card.Title>Overview</Card.Title>
                <Card.Text>Cat videos watched</Card.Text>
                <Card.Text>Slices of pizza in the fridge</Card.Text>
                <Card.Text>Favourite songs beginning with the letter `A`</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Overview
