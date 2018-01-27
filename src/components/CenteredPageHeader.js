import React from 'react';
import { PageHeader, Row, Col } from 'react-bootstrap';

const CenteredPageHeader = ({ header }) => (
  <Row>
    <Col xsHidden md={4} />
    <Col xs={6} md={4}>
      <PageHeader className='page-header'>
        {header}
      </PageHeader>
    </Col>
    <Col xsHidden md={4} />
  </Row>
);

export default CenteredPageHeader;
