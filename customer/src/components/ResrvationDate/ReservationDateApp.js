import React from 'react';
import { Route, Link } from 'react-router-dom';
import AppointmentForm from './AppointmentForm';
import CalendarView from './CalendarView';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core'
import NewIgabara from '../igabaraNewUpdate/newigabara';

const ReservationDateApp = () => {
  const paperStyle={padding :20,height:'120vh',width:1400, margin:"20px auto"}
  
  return (
    <div className="App">
      <NewIgabara/>
      <Paper elevation={10} style={paperStyle}>
      <header className="App-header" color="blue">
                Date Reservation Calender for Brown Igabara
      </header>
      {/* <Link to ='create-appt'><Button variant="outlined" color="secondary">Book now</Button>{' '}</Link> */}
      <Route exact path='/calendar' component={CalendarView} />
      </Paper>
    </div>
  );
}

export default ReservationDateApp;
