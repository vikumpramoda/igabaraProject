import React from 'react';
import { Route, Link } from 'react-router-dom';
import PinkAppointmentForm from './AppointmentForm';
import PinkCalendarView from './CalendarView';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core'
import NewIgabara from '../newigabara';

const PinkReservationDateApp = () => {
  const paperStyle={padding :20,height:'120vh',width:1400, margin:"20px auto"}
  
  return (
    <div className="App">
      <NewIgabara/>
      <Paper elevation={10} style={paperStyle}>
      <header className="App-header" color="blue">
                Date Reservation Calender for Pink Igabara
      </header>
      <Link to ='create-appt2'><Button variant="outlined" color="secondary">Book now</Button>{' '}</Link>
      <Route exact path='/calendar2' component={PinkCalendarView} />
      <Route exact path='/create-appt2' component={PinkAppointmentForm} />

      </Paper>
    </div>
  );
}

export default PinkReservationDateApp;
