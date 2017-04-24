import React, { Component } from 'react';
import { PageHeader, Grid, Row, Col, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import ContactBar from './ContactBar';
import JaeImage from '../images/jae.png';
import Menu from './Menu';

class About extends Component {

  render = () => (
    <div>
      <Menu />
      <Grid>
        <Row>
          <Col xsHidden md={4} />
          <Col xs={6} md={4}>
            <PageHeader className="page-header">
              About
            </PageHeader>
          </Col>
          <Col xsHidden md={4} />
        </Row>
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
                Once finished eleven soups at Olive Garden's Unlimited Soup, Salads, and Breadsticks Lunch Deal.
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col xsHidden md={4} />
        </Row>
        <Row>
          <ContactBar />
        </Row>
      </Grid>

    </div>
  );
}

export default About;
