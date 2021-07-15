import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";
import '../img/css.css';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "70vh" }} className="box">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h5>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged in sucessufully{" "}
                <div >
                                    <label> </label>
                                    </div> 
                                    <div >
                                    <label> </label>
                                    </div>
                <span style={{ fontFamily: "monospace" }}> Welcome to Reservation Web App</span> For Igabara Hobbit House
              </p>
            </h5>

                                    <div >
                                    <label> </label>
                                    </div> 
                                    <div >
                                    <label> </label>
                                    </div>     
            <Button variant="contained" color="secondary"
              onClick={this.onLogoutClick}  
            >
              Log Out
            </Button>

                                    <div >
                                    <label> </label>
                                    </div>   

               <div> 
               <Link to="/guest" >
              <Button variant="contained" color="primary"
               
               >
               Guest Deatails Form
              </Button>
              </Link>
              </div>

                                    <div >
                                    <label> </label>
                                    </div>  

                <div> 
               <Link to="/calendar" >
              <Button variant="contained" color="primary"
               
               >
               Book Now
              </Button>
              </Link>
              </div>                     

          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
