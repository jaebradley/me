import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import CenteredPageHeader from './CenteredPageHeader';
import ContactBar from './ContactBar';

class Contact extends Component {

  render = () => (
    <Grid>
      <CenteredPageHeader header={"Contact"} />
      <Row>
        <ContactBar />
      </Row>
    </Grid>
  );
}

export default Contact;
