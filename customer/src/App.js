import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import ReservationDateApp from './components/ResrvationDate/ReservationDateApp';
import AppointmentForm from './components/ResrvationDate/AppointmentForm';
import PinkReservationDateApp from './components/igabaraNewUpdate/pink/ReservationDateApp';
import PinkAppointmentForm from './components/igabaraNewUpdate/pink/AppointmentForm';
import GreenReservationDateApp from './components/igabaraNewUpdate/green/ReservationDateApp';
import GreenAppointmentForm from './components/igabaraNewUpdate/green/AppointmentForm';
import GuestDetails from './components/GuestDetails/guestForm'
import ForeignGuestDetails from './components/ForeignGuestDeatails/guestForm'
import 'antd/dist/antd.css';
import './index.scss';
//import App from './components/ResrvationDate/ReservationDateApp';
//import loginApp from './components/login/loginApp';




import { BrowserRouter as Router, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

//import Navbar from "./components/login/layout/Navbar";
import Landing from "./components/login/layout/Landing";
import Register from "./components/login/auth/Register";
import Login from "./components/login/auth/Login";
import PrivateRoute from "./components/login/private-route/PrivateRoute";
import Dashboard from "./components/login/dashboard/Dashboard";
import UpdateDetails from "./components/GuestDetails/updateGuestList";
import PackageList from "./components/packages/packageList";
import Creditcards from "./components/OnlinePayment/Creditcards/Creditcards";
import "./App.css";
import HomePage from './components/Homepage/HomeP';
import FoodList from './components/Foods/breakfastList';
import DinnerList from './components/Foods/dinnerList';
import LunchList from './components/Foods/lunchList';
import CreateFeedback from './components/Feedback/addFeedback';
import SimpleMap from './components/Location/map';
import Contact from './components/ContactUs/contactUs';



// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    
    <div className="App">

      <BrowserRouter>
      
      <Route path="/calendar" render={ReservationDateApp}/>
      <Route exact path='/create-appt' component={AppointmentForm} />

      <Route path="/calendar2" render={PinkReservationDateApp}/>
      <Route exact path='/create-appt2' component={PinkAppointmentForm} />

      <Route path="/calendar3" render={GreenReservationDateApp}/>
      <Route exact path='/create-appt3' component={GreenAppointmentForm} />
      
      <Route  path='/homepage' component={HomePage} />
      <Route exact path='/PackageList' component={PackageList} />
      <Route exact path='/viewFoods' component={FoodList} />
      <Route exact path='/viewDinnerFoods' component={DinnerList} />
      <Route exact path='/viewLunchFoods' component={LunchList} />
      <Route exact path='/Creditcards' component={Creditcards} />
      <Route exact path='/map' component={SimpleMap} />
      <Route exact path='/contact' component={Contact} />
      </BrowserRouter>
     
      <Provider store={store}>
        <Router>
          <div className="App">
            
            <Route exact path="/signup" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path='/guest' component={GuestDetails} />
              <PrivateRoute exact path='/feedback' component={CreateFeedback} />
              <PrivateRoute exact path='/foreign' component={ForeignGuestDetails} />
              <PrivateRoute exact path='/updateguest' component={UpdateDetails} />
            </Switch>
          </div>
        </Router>
      </Provider>

    </div>
  );
}

export default App;
