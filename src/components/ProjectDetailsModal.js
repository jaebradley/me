import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import renderHTML from 'react-render-html';

class ProjectDetailsModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
        body: ""
    };
}

  componentDidMount() {
      var self = this;
      this.props.body.then(body => self.setState({
        body: renderHTML(body)
      }));
  }

  render = () => (
    <Modal className="project-details"
      show={this.props.show}
      onHide={this.props.close.bind(this)}>
      <Modal.Header closeButton />
      <Modal.Body>
        {this.state.body}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.close.bind(this)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectDetailsModal;
