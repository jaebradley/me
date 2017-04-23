import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import GithHubImage from '../images/github.png';
import GmailImage from '../images/gmail.png';
import LinkedInImage from '../images/linkedin.png';
import TwitterImage from '../images/twitter.png';

import ContactIcon from './ContactIcon';

class ContactBar extends Component {
  render = () => (
    <Grid>
      <Row className="show-grid">
        <Col xsHidden md={4} />
        <Col xs={6} md={4} className="contact-bar">
          <ContactIcon href={"https://github.com/jaebradley"} src={GithHubImage} alt="Github" />
          <ContactIcon
            href={"https://www.linkedin.com/in/jaebradley/"}
            src={LinkedInImage}
            alt="LinkedIn" />
          <ContactIcon
            href={"mailto:jae.b.bradley@gmail.com"}
            src={GmailImage}
            alt="Gmail" />
          <ContactIcon
            href={"https://twitter.com/jaebradley"}
            src={TwitterImage}
            alt="Twitter" />
        </Col>
        <Col xsHidden md={4} />
      </Row>
    </Grid>
  );
}

export default ContactBar;
