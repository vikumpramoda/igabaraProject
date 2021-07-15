import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Form, Input, DatePicker, Button, Radio, } from 'antd';


const AppointmentForm = (props) => {
  const [input, setInput] = useState({
    email: '',
    firstName: '',
    lastName: '',
    slotGuest: '',
    slotDate: ''
  })
  const [Guest] = useState(true);
  const [error, setError] = useState('')

  const slotsGuest = ['2', '3', '4', '5'];
  
  const baseUrl = 'http://localhost:5000';

  const changeHandler = event => {
    setError('');
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }



  const dateHandler = (date, datestring) => {
    setError('');
    setInput({
      ...input, 
      slotDate: date
    })
  }

  const validateInput = () => {
    if (!input.email || !input.firstName || !input.lastName || !input.slotGuest || !input.slotDate) {
      setError('All fields are required');
      return false;
    } else {
      return true;
    }
  }

  const submitHandler = event => {
    event.preventDefault();
    if (validateInput()) {
      axios.post(`${baseUrl}/reservations`, input)
        .then(response => {
          console.log('success adding appointment:', response);
          setInput({
            email: '',
            firstName: '',
            lastName: '',
            slotGuest: '',
            slotDate: ''
          })
          props.history.push('/');
        })
        .catch(error => {
          console.log('error adding appointment:', error);
        })
    }
  }
      
  return (
    <div>
   
    <Form className='appt-form' onSubmit={submitHandler}>
      <Input name='email' value={input.email} placeholder='Email' onChange={changeHandler} />
      <Input name='firstName' value={input.firstName} placeholder='First name' onChange={changeHandler} />
      <Input name='lastName' value={input.lastName} placeholder='Last name' onChange={changeHandler} />
      
      {Guest ? (
        <Radio.Group name='slotGuest' value={input.slotGuest} onChange={changeHandler}>
          {slotsGuest.map(item => <Radio key={item} value={`${item} Guest`}>{`${item} Guest`}</Radio>)}
        </Radio.Group>
      ) : (
        <Radio.Group name='slotGuest' value={input.slotGuest} onChange={changeHandler}>
        </Radio.Group>
      )}
      <DatePicker onChange={dateHandler}/>
      {error && <div>{error}</div>}

      
      <Button onClick={submitHandler}>BOOK</Button>
    </Form>
    
    </div>
  )
}

export default withRouter(AppointmentForm);