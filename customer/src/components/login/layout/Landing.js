import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../img/css.css';
import Button from '@material-ui/core/Button';
class Landing extends Component {
  render() {
    
    return (
      <div className="box">  
        <div className="row">
          <div className="col s12 center-align">
            <h5>
              Sigu Up for Guests
            </h5>
            <p className="flow-text grey-text text-darken-1">
            “Travel opens your mind as few other things do. It is its own form of hypnotism, and I am forever under its spell.”
            </p>
            <br />
            <div className="col s6">
              <Link to="/register" >
              <Button  variant="contained" color="primary">
              Register
              </Button>
              </Link>
            </div>

                                    <div >
                                    <label> </label>
                                    </div>   

            <div className="col s6">
              <Link to="/login" >
              <Button variant="contained" color="primary">
               Log In
              </Button>
              </Link>

            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Landing;
