import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";
import {Link} from "react-router-dom";

class Sidebar extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        //const { user } = this.props.auth;
        return (
            <div className="border-right h-100" id="sidebar-wrapper">
                <div className="list-group list-group-flush">
                    <Link to="/calendar" className="list-group-item list-group-item-action">Reserved Dates</Link>
                    
                    <Link to="/exerciseslist" className="list-group-item list-group-item-action">Guest Deatails</Link>
                    <Link to="/foreignguestanddatesList" className="list-group-item list-group-item-action">Foreign Guest Deatails</Link>
                    
                    <Link to="/package" className="list-group-item list-group-item-action">Add Packages</Link>
                    <Link to="/packagelist" className="list-group-item list-group-item-action">Packages list</Link>
                   
                    <Link to="/addfoods" className="list-group-item list-group-item-action">Add food Menu</Link>
                    <Link to="/foodlist" className="list-group-item list-group-item-action">Food List</Link>
                    <Link to="/pie" className="list-group-item list-group-item-action">Charts</Link>
                    <Link to="/feedbackReport" className="list-group-item list-group-item-action">Feedback Reports</Link>
                    <Link to="/users" className="list-group-item list-group-item-action">Transaction Reports</Link>
                </div>
            </div>
        );
    }
}

Sidebar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Sidebar);
