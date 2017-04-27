import React, { Component } from 'react';
import { PageHeader, Row, Col } from 'react-bootstrap';

class CenteredPageHeader extends Component {
  render = () => (
    <Row>
      <Col xsHidden md={4} />
      <Col xs={6} md={4}>
        <PageHeader className="page-header">
          {this.props.header}
        </PageHeader>
      </Col>
      <Col xsHidden md={4} />
    </Row>
  );
}

export default CenteredPageHeader;
