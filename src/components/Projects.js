import React, { Component } from 'react';
import { PageHeader, Grid, Row, Col, ListGroup } from 'react-bootstrap';
import rp from 'request-promise';
import showdown from 'showdown';

import Menu from './Menu';
import Project from './Project';

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

  fetchMarkdown(markdownUrl) {
    return rp(markdownUrl)
      .then(markdown => this.converter.makeHtml(markdown))
      .catch((err) => console.error(err));
  }

  render = () => (
    <div>
      <Menu />
      <PageHeader className="page-header">
        Projects
      </PageHeader>
      <Grid>
        <Row>
          <Col xs={6} md={1}>
          </Col>
          <Col xs={6} md={10}>
            <ListGroup className="project-descriptions">
              <Project
                  src={UberCliImage} className="project-image"
                  title="Uber CLI"
                  body={this.fetchMarkdown(this.uberCliReadmeUrl)}
                  rounded />
              <Project
                    src={NbaCliImage} className="project-image"
                    title="NBA CLI"
                    body={this.fetchMarkdown(this.nbaCliReadmeUrl)}
                    rounded />
              <Project
                  src={AtomifyGif} className="project-image"
                  title="Atomify"
                  body={this.fetchMarkdown(this.atomifyReadmeUrl)}
                  rounded />
            </ListGroup>
          </Col>
          <Col xs={6} md={1}>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default Projects;
