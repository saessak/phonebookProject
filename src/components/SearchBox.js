import React from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';

const SearchBox = () => {
  return (
    <Row>
        <Col lg={9}>
            <Form.Control type="text" placeholder="이름을 입력해주세요." />
        </Col>
        <Col lg={3}>
            <Button>찾기</Button>
        </Col>
    </Row>
  )
}

export default SearchBox