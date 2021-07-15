import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Form, Input, DatePicker, Button, Radio, } from 'antd';
import { Paper } from '@material-ui/core'

const GreenAppointmentForm = (props) => {
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
      axios.post(`${baseUrl}/greenreservations`, input)
        .then(response => {
          console.log('success adding appointment:', response);
          setInput({
            email: '',
            firstName: '',
            lastName: '',
            slotGuest: '',
            slotDate: ''
          })
          props.history.push('/calendar3');
           {alert('Booking Successfully');}
        })
        .catch(error => {
          console.log('error adding appointment:', error);
        })
    }
  }
      const paperStyle={padding :20,height:'75vh',width:600, margin:"20px auto", backgroundColor:'#e6ffee'}
  return (
    <div>
    <Paper elevation={10} style={paperStyle}>
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
    </Paper>
    </div>
  )
}

export default withRouter(GreenAppointmentForm);