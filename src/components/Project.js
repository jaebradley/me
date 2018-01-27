import React, { Component } from 'react';
import { Image, ListGroupItem } from 'react-bootstrap';

import ProjectDetailsModal from './ProjectDetailsModal';

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = { showModal: false, hoverTimer: null };
  }

  handleMouseEnter = () => {
    const hoverTimer = setTimeout(this.openModal, 1000);
    this.setState({ hoverTimer });
  }

  handleMouseOut = () => {
    clearTimeout(this.state.hoverTimer);
    this.setState({ hoverTimer: null });
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  openModal = () => {
    this.setState({ showModal: true });
  }

  render = () => {
    const { src, title, imageSrc, markdownURL } = this.props;
    const { showModal } = this.state;

    return (
      <div>
        <h2 className="project-title">
          <a href={src} target="__blank">{title}</a>
        </h2>
        <ListGroupItem>
          <Image
            className="project-image"
            src={imageSrc}
            onClick={this.openModal}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseOut}
            rounded />
        </ListGroupItem>
        <ProjectDetailsModal
          show={showModal}
          close={this.closeModal}
          markdownURL={markdownURL}
        />
      </div>
    );
  };
}

export default Project;
