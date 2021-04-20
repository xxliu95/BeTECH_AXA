import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends React.Component {
  render() {
    return (
        <Container>
          <Row>
            <h1>AXA BeTECH</h1>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" className="text-center">Button1</Button>{' '}
            </Col>
            <Col>
              <Button variant="primary" className="text-center">Button2</Button>{' '}
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" className="text-center">Button1</Button>{' '}
            </Col>
            <Col>
              <Button variant="primary" className="text-center">Button2</Button>{' '}
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" className="text-center">Button1</Button>{' '}
            </Col>
            <Col>
              <Button variant="primary" className="text-center">Button2</Button>{' '}
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" className="text-center">Button2</Button>{' '}
            </Col>
          </Row>
        </Container>
    );
  }
}
  
export default Home;