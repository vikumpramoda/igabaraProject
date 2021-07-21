import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import RegisterPanel from "./components/authPanel/RegisterPanel";
import LoginPanel from "./components/authPanel/LoginPanel";
import Dashboard from "./components/dashboard/Dashboard";
//import PrivateRoute from "./components/common/PrivateRoute";
import store from "./store";
import "./App.css";


import Sidebar from "./components/layout/Sidebar";
import GuestList from "./components/GuestdeatailsList/guestList";
import ReservationDateApp from "./components/calendar/ResrvationDate/ReservationDateApp";
import PinkReservationDateApp from "./components/calendar/New igabara/pink/ReservationDateApp";
import GreenReservationDateApp from "./components/calendar/New igabara/green/ReservationDateApp";
import CreatePackageno from "./components/packages/packageNo";
import CreatePackage from "./components/packages/packageDescription";
import PackageList from "./components/packages/packageList";
import EditPackages from "./components/packages/editPackages";
import UpdateDetails from "./components/GuestdeatailsList/updateGuestList";
import GuestandDatesList from "./components/reservationDates-Guest/guestListView";
import ForeignGuestandDatesList from "./components/ForeignGuestList/guestList";
import Addfoods from "./components/foods/addBreakfast";
import AddDinner from "./components/foods/Dinner/addDinner";
import AddLunch from "./components/foods/Lunch/addLunch";
import FoodList from "./components/foods/foodList";
import DinnerList from "./components/foods/viewFoods/dinnerFoodList";
import LunchList from "./components/foods/viewFoods/lunchFoodList";
import AddFoodNavbBar from "./components/foods/addFoodNavBar";
import ViewFoodNavbBar from "./components/foods/viewFoods/viewFoodNavBar";
import pie from "./components/Charts/Pie";
import FeedbackReport from "./components/feedback/feedbackReport";
import Pie2 from "./components/Charts/packageBarChart";
import Gmail from "./components/email/email";

import AppointmentForm from "./components/calendar/ResrvationDate/AppointmentForm";
import foodBreakfast from "./components/Charts/BreakfastAnalyseBarChart";
import fooddinner from "./components/Charts/DinnerAnalyseBarChart";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={RegisterPanel} />
              <Route exact path="/login" component={LoginPanel} />
              <Switch>

                
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/Sidebar" component={Sidebar} />
           
                <div className="App">
                <Route exact path="/exerciseslist" component={GuestList} />
                <Route exact path="/calendar" component={ReservationDateApp} />
                <Route exact path="/calendar2" component={PinkReservationDateApp} />
                <Route exact path="/calendar3" component={GreenReservationDateApp} />
                <Route exact path="/package" component={CreatePackageno} />
                <Route exact path="/packageDis" component={CreatePackage} />
                <Route exact path="/addfoods" component={Addfoods} />
                <Route exact path="/addDinner" component={AddDinner} />
                <Route exact path="/addLunch" component={AddLunch} />
                <Route exact path="/foodList" component={FoodList} />
                <Route exact path="/dinnerList" component={DinnerList} />
                <Route exact path="/lunchList" component={LunchList} />
                <Route exact path="/addfoodNavBar" component={AddFoodNavbBar} />
                <Route exact path="/viewfoodNavBar" component={ViewFoodNavbBar} />
                <Route exact path="/packagelist" component={PackageList} />
                <Route path="/editpackage/:id" component={EditPackages}/>
                <Route path="/update/:id" component={UpdateDetails}/>
                <Route exact path="/guestanddatesList" component={GuestandDatesList} />
                <Route exact path="/foreignguestanddatesList" component={ForeignGuestandDatesList} />
                <Route exact path="/pie" component={pie} />
                <Route exact path="/pie2" component={Pie2} />
                <Route exact path="/breakfastChart" component={foodBreakfast} />
                <Route exact path="/dinnerChart" component={fooddinner} />
                <Route exact path="/feedbackReport" component={FeedbackReport} />
                <Route exact path="/Gmail" component={Gmail} />
                
                <Route exact path='/create-appt' component={AppointmentForm} />
                </div>
                

               
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
