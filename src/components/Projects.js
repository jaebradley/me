import React, { Component } from 'react';
import { Grid, Row, Col, ListGroup } from 'react-bootstrap';

import Project from './Project';
import CenteredPageHeader from './CenteredPageHeader';

import ProjectDetails from '../constants/ProjectDetails';

class Projects extends Component {

  buildProject = ({ link, title, readmeURL, imageSrc }) => (
    <Project
      rounded
      key={title}
      title={title}
      imageSrc={imageSrc}
      src={link}
      markdownURL={readmeURL}
    />
  );

  render = () => (
      <Grid>
        <CenteredPageHeader header={"Projects"} />
        <Row>
          <Col xs={6} md={1} />
          <Col xs={6} md={10}>
            <ListGroup className="project-descriptions">
              { ProjectDetails.map(project => this.buildProject(project) ) }
            </ListGroup>
          </Col>
          <Col xs={6} md={1} />
        </Row>
      </Grid>
  );
}

export default Projects;
