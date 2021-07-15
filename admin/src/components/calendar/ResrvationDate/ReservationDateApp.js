import React from 'react';
import { Route} from 'react-router-dom';
import CalendarView from './CalendarView';
import { Paper } from '@material-ui/core'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import NewIgabara from '../New igabara/newigabara';
const ReservationDateApp = () => {
  const paperStyle={padding :20,height:'90vh',width:1200, margin:"20px auto", backgroundColor:'white'}
  return (

    <div className="App">
      <NewIgabara/>
      <Paper elevation={10} style={paperStyle}>
      <header className="App-header" color="blue">
                Booked Days Displayed 
                
                <Link to ='guestanddatesList'><Button variant="warning"  style={{position:'absolute',right: 450  }} >List View</Button>{' '}</Link>
                
      </header>  
     
      <Route exact path='/calendar' component={CalendarView} />
      <Link to ='create-appt'><Button variant="outlined" color="secondary">edit</Button>{' '}</Link>
      
      </Paper>
     
    </div>
  );
}

export default ReservationDateApp;
