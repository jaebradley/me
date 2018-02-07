import React from 'react';
import { Row, Col, Media } from 'reactstrap';

import GitHubImage from '../images/github.png';
import GmailImage from '../images/gmail.png';
import LinkedInImage from '../images/linkedin.png';
import TwitterImage from '../images/twitter.png';

const ContactBar = () => (
    <Row className="show-grid">
      <Col xs={6} md={4} className="contact-bar">
        <Col xs={12} md={3}>
          <Media
            target="_blank"
            href="https://github.com/jaebradley"
            src={GitHubImage}
            alt="Github"
          />
        </Col>
        <Col xs={12} md={3}>
          <Media
            target="_blank"
            href="https://www.linkedin.com/in/jaebradley/"
            src={LinkedInImage}
            alt="LinkedIn" />
        </Col>
        <Col xs={12} md={3}>
          <Media
            target="_blank"
            href="https://twitter.com/jaebradley"
            src={TwitterImage}
            alt="Twitter" />
          </Col>
        <Col xs={12} md={3}>
          <Media
            target="_blank"
            href="mailto:jae.b.bradley@gmail.com"
            src={GmailImage}
            alt="Gmail" />
        </Col>
      </Col>
      <Col md={4} />
    </Row>
);

export default ContactBar;
