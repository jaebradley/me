import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { ContactInformation, Service, SERVICE_TYPE, Email, FONT_AWESOME_SIZE } from 'react-contact-information';

import CenteredPageHeader from './CenteredPageHeader';
import ProfilePicture from './ProfilePicture';

const About = () => (
  <div>
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
    <footer className='menu-footer'>
      <ContactInformation className='menu-contact-information' size={FONT_AWESOME_SIZE.ONE} rowLength={4}>
        <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.GITHUB} />
        <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.LINKEDIN} />
        <Service accountIdentifier='jaebradley' type={SERVICE_TYPE.TWITTER} />
        <Email to={'jae.bradley@gmail'} />
      </ContactInformation>
    </footer>
  </div>
);

export default About;
