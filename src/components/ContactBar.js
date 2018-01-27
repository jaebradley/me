import React from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';

import GitHubImage from '../images/github.png';
import GmailImage from '../images/gmail.png';
import LinkedInImage from '../images/linkedin.png';
import TwitterImage from '../images/twitter.png';

const ContactBar = () => (
  <Grid>
    <Row className="show-grid">
      <Col xsHidden md={4} />
      <Col xs={6} md={4} className="contact-bar">
        <Col xs={12} md={3}>
          <Thumbnail
            target="_blank"
            href="https://github.com/jaebradley"
            src={GitHubImage}
            alt="Github"
          />
        </Col>
        <Col xs={12} md={3}>
          <Thumbnail
            target="_blank"
            href="https://www.linkedin.com/in/jaebradley/"
            src={LinkedInImage}
            alt="LinkedIn" />
        </Col>
        <Col xs={12} md={3}>
          <Thumbnail
            target="_blank"
            href="https://twitter.com/jaebradley"
            src={TwitterImage}
            alt="Twitter" />
          </Col>
        <Col xs={12} md={3}>
          <Thumbnail
            target="_blank"
            href="mailto:jae.b.bradley@gmail.com"
            src={GmailImage}
            alt="Gmail" />
        </Col>
      </Col>
      <Col xsHidden md={4} />
    </Row>
  </Grid>
);

export default ContactBar;
