import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';

const ContactForm = () => {
    const [name, setName]=useState('');
    const [phoneNumber, setPhoneNumber]=useState('');
    const dispatch = useDispatch(); // dispatch는 액션을 보낸다.
    
    const addContact=(event)=>{
        event.preventDefault(); //클릭시 새로고침 방지
        dispatch({type:"ADD_CONTACT", payload:{name,phoneNumber}});
    }
  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder="이름을 입력해주세요." onChange={(event)=>setName(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="number" placeholder="전화번호를 입력해주세요." onChange={(event)=>setPhoneNumber(event.target.value)}/>
      </Form.Group>

      <Button variant="primary" type="submit" >
        추가
      </Button>
    </Form>
  )
}

export default ContactForm