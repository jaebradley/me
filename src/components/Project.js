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
        {this.props.title}
      </h2>
      <ListGroupItem>
        <Image
          src={this.props.src}
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
