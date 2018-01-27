import React, { Component } from 'react';
import { Grid, Row, Col, ListGroup, ListGroupItem, Image } from 'react-bootstrap';

import CenteredPageHeader from './CenteredPageHeader';
import ContactBar from './ContactBar';
import ProfilePicture from './ProfilePicture';

const About = () => (
  <div>
      <Grid>
        <CenteredPageHeader header={'About'} />
        <Row>
          <Col xsHidden md={4} />
          <Col xs={6} md={4}>
            <ProfilePicture />
          </Col>
          <Col xsHidden md={4} />
        </Row>
        <Row>
          <Col xsHidden md={4} />
          <Col xs={6} md={4}>
            <ListGroup className='about-description'>
              <ListGroupItem>
                Boston-based backend software engineer.
              </ListGroupItem>
              <ListGroupItem>
                Avid sports fan (particularly the NBA).
              </ListGroupItem>
              <ListGroupItem>
                Once ate eleven soups at Olive Garden.
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col xsHidden md={4} />
        </Row>
      </Grid>
      <ContactBar />
    </div>
);

export default About;
