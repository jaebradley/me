import React from 'react';
import { Row, Col } from 'reactstrap';

const CenteredPageHeader = ({ header }) => (
  <Row>
    <Col md={4} />
    <Col xs={6} md={4}>
      <h2 className='page-header'>
        {header}
      </h2>
    </Col>
    <Col md={4} />
  </Row>
);

export default CenteredPageHeader;
