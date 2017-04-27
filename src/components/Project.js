import React, { Component } from 'react';
import { Image, ListGroupItem } from 'react-bootstrap';

import ProjectDetailsModal from './ProjectDetailsModal';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  openModal() {
    this.setState({ showModal: true });
  }

  render = () => (
    <div>
      <h2 className="project-title">
        <a href={this.props.src} target="__blank">{this.props.title}</a>
      </h2>
      <ListGroupItem>
        <Image
          src={this.props.imageSrc}
          className="project-image"
          onClick={this.openModal.bind(this)}
          rounded />
      </ListGroupItem>
      <ProjectDetailsModal
        show={this.state.showModal}
        close={this.closeModal.bind(this)}
        body={this.props.body}
      />
    </div>
  );
}

export default Project;
