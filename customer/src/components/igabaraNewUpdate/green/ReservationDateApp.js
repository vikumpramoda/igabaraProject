import React from 'react';
import { Route, Link } from 'react-router-dom';
import GreenAppointmentForm from './AppointmentForm';
import GreenCalendarView from './CalendarView';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core'
import NewIgabara from '../newigabara';

const GreenReservationDateApp = () => {
  const paperStyle={padding :20,height:'120vh',width:1400, margin:"20px auto"}
  
  return (
    <div className="App">
      <NewIgabara/>
      <Paper elevation={10} style={paperStyle}>
      <header className="App-header" color="blue">
                Date Reservation Calender for Green Igabara
      </header>
      <Link to ='create-appt3'><Button variant="outlined" color="secondary">Book now</Button>{' '}</Link>
      <Route exact path='/calendar3' component={GreenCalendarView} />
      <Route exact path='/create-appt3' component={GreenAppointmentForm} />

      </Paper>
    </div>
  );
}

export default GreenReservationDateApp;
