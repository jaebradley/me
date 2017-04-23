import React, { Component } from 'react';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';
import ContactBar from './ContactBar';

class About extends Component {
    render = () => (
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
          <ContactBar />
        </Row>
      </Grid>
    );
}

export default About;
