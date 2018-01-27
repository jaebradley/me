import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import renderHTML from 'react-render-html';
import rp from 'request-promise';
import showdown from 'showdown';

class ProjectDetailsModal extends Component {

  constructor(props) {
    super(props);

    this.converter = new showdown.Converter();
    this.handleHide = this.props.close.bind(this);

    this.state = { body: '' };
}

  componentDidMount = () => {
    const { markdownURL } = this.props;

    rp(markdownURL)
      .then(markdown => this.converter.makeHtml(markdown))
      .then(html => this.setState({ body: html }));
  }

  render = () => (
    <Modal className='project-details'
      show={this.props.show}
      onHide={this.handleHide}>
      <Modal.Header closeButton />
      <Modal.Body>
        { renderHTML(this.state.body) }
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.handleHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectDetailsModal;
