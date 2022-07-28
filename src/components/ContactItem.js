import React from 'react'
import {Row, Col} from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <div>
        <Row>
            <Col lg={2}>
                <img width="100%" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
            </Col>
            <Col lg={10}>
                <div>{item?.name}</div>
                <div>{item?.phoneNumber}</div>
            </Col>
        </Row>
    </div>
  )
}

export default ContactItem