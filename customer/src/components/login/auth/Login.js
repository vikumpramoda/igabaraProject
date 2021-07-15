import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authActions";
import classnames from "classnames";
import '../img/css.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="box">
        <div >
          <div className="col s8 offset-s2">
            
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h5>
                <b>Login</b> below
              </h5>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register" style={{ flex: 1, margin: '0 20px 0 0', color: 'white'}}>Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <TextField   inputProps={{ style: { fontFamily: 'Arial', color: 'white'}}}
                 style={{ flex: 1, margin: '0 20px 0 0', color: 'white'}}
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s12">
                <TextField  
                 inputProps={{ style: { fontFamily: 'Arial', color: 'white'}}}
                 style={{ flex: 1, margin: '0 20px 0 0', color: 'white'}}
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>

                                    <div >
                                    <label> </label>
                                    </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <Button variant="contained" color="primary"
                  
                  type="submit"
                  
                >
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
