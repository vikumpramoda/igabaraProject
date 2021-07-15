import React from 'react';
import { Route, Link } from 'react-router-dom';
import GreenCalendarView from './CalendarView';
import { Paper } from '@material-ui/core'
import NewIgabara from '../newigabara';

const GreenReservationDateApp = () => {
  const paperStyle={padding :20,height:'90vh',width:1200, margin:"20px auto"}
  
  return (
    <div className="App">
      <NewIgabara/>
      <Paper elevation={10} style={paperStyle}>
      <header className="App-header" color="blue">
                Date Reservation Calender for Green Igabara
      </header>
      
      <Route exact path='/calendar3' component={GreenCalendarView} />

      </Paper>
    </div>
  );
}

export default GreenReservationDateApp;
