import React, { Component } from 'react';
import { Grid, Row, Col, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import CenteredPageHeader from './CenteredPageHeader';
import JaeImage from '../images/jae.png';

class About extends Component {

  render = () => (
    <Grid>
      <CenteredPageHeader header={"About"} />
      <Row>
        <Col xsHidden md={4} />
        <Col xs={6} md={4}>
          <Image src={JaeImage} circle className="about-image"/>
        </Col>
        <Col xsHidden md={4} />
      </Row>
      <Row>
        <Col xsHidden md={4} />
        <Col xs={6} md={4}>
          <ListGroup className="about-description">
            <ListGroupItem>
              Bowdoin College graduate
            </ListGroupItem>
            <ListGroupItem>
              Boston-based backend software engineer.
            </ListGroupItem>
            <ListGroupItem>
              Avid sports fan (particularly the NBA).
            </ListGroupItem>
            <ListGroupItem>
              Once downed eleven soups at Olive Garden.
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col xsHidden md={4} />
      </Row>
    </Grid>
  );
}

export default About;
