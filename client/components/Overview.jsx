import React from 'react'
// import AnimalSvg from './AnimalSvg'
import { Container, Col, Row, Card } from 'react-bootstrap'

class Overview extends React.Component {
  render () {
    return (
      <Container className="card-main">
        <Row>
          <Col>
            <Card className="d-block">
              <Card.Body>
                <Card.Title className="main-title">Overview</Card.Title>
                {/* <AnimalSvg classname="animal-svg" /> */}
                <div className="main-text">
                  <Card.Text>Cat videos watched</Card.Text>
                  <Card.Text>Slices of pizza in the fridge</Card.Text>
                  <Card.Text>Favourite songs beginning with the letter `A`</Card.Text>
                </div>
                <Card.Title className="main-title">Top Music</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Overview
