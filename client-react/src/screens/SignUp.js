import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from "axios";

import '../transaction.min.css';
import Links from '../components/nav/Links';

class SignUp extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="PageSwitcher">
            <Link to="/login" className="PageSwitcher__Item">Sign In</Link>
            <Link to="/signup" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</Link>
          </div>

          <div className="FormTitle">
            <Link to="/login" className="FormTitle__Link">Sign In</Link> or <Link to="/signup"
              className="FormTitle__Link FormTitle__Link--Active">Sign Up</Link>
          </div>

          <Route path="/signup">
            <div className="FormCenter">
              <form className="FormFields" onSubmit={this.handleSubmit}>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="firstname">First Name</label>
                  <input type="text" id="firstname" className="FormField__Input" placeholder="Enter your first name" name="firstname" />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="lastname">Last Name</label>
                  <input type="text" id="lastname" className="FormField__Input" placeholder="Enter your last name" name="lastname" />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">Email</label>
                  <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="name">Username</label>
                  <input type="text" id="username" className="FormField__Input" placeholder="Enter your username" name="username" />
                </div>
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="name">Password</label>
                  <input type="password" id="password" className="FormField__Input" placeholder="Enter your full name" name="password" />
                </div>
                <div className="FormField">
                  <button className="FormField__Button mr-20">Submit</button><a href="#" className="FormField__Link">Already signed up</a>
                </div>
              </form>
            </div>
          </Route>
        </div>
      </Router>
    )
  }
}

export default SignUp;