import React, { Component } from 'react';
import { Grid, Row, Col, ListGroup } from 'react-bootstrap';
import rp from 'request-promise';
import showdown from 'showdown';

import Project from './Project';
import CenteredPageHeader from './CenteredPageHeader';

import UberCliImage from '../images/uber-cli.png';
import NbaCliImage from '../images/nba-cli.png';
import AtomifyGif from '../images/atomify.gif';

class Projects extends Component {

  constructor(props) {
    super(props);

    this.converter = new showdown.Converter();
    this.uberCliReadmeUrl = "https://raw.githubusercontent.com/jaebradley/uber-cli/master/README.md";
    this.nbaCliReadmeUrl = "https://raw.githubusercontent.com/jaebradley/nba-cli/master/README.md";
    this.atomifyReadmeUrl = "https://raw.githubusercontent.com/jaebradley/atomify/master/README.md";
  }

  fetchHtml(url) {
    return rp(url)
      .then(markdown => this.converter.makeHtml(markdown))
      .catch((err) => console.error(err));
  }

  render = () => (
      <Grid>
        <CenteredPageHeader header={"Projects"} />
        <Row>
          <Col xs={6} md={1} />
          <Col xs={6} md={10}>
            <ListGroup className="project-descriptions">
              <Project
                src={UberCliImage}
                title="Uber CLI"
                body={this.fetchHtml(this.uberCliReadmeUrl)}
                rounded />
              <Project
                src={NbaCliImage}
                title="NBA CLI"
                body={this.fetchHtml(this.nbaCliReadmeUrl)}
                rounded />
              <Project
                src={AtomifyGif}
                title="Atomify"
                body={this.fetchHtml(this.atomifyReadmeUrl)}
                rounded />
              </ListGroup>
          </Col>
          <Col xs={6} md={1} />
        </Row>
      </Grid>
  );
}

export default Projects;
