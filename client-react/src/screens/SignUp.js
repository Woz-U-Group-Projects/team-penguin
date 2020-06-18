import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import axios from "axios";

import '../transaction.min.css';
import Links from '../components/nav/Links';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: ''
    };
    this.firstname = React.createRef();
    this.lastname = React.createRef();
    this.email = React.createRef();
    this.username = React.createRef();
    this.password = React.createRef();
  };

  addUser = () => {
    let url = "http://localhost:3001/users/signup";
    axios.post(url, {
      firstname: this.firstname.current.value,
      lastname: this.lastname.current.value,
      email: this.email.current.value,
      username: this.username.current.value,
      password: this.password.current.value
    })
      .then(response => {
        //empty inputs
        this.firstname.current.value = ""
        this.lastname.current.value = ""
        this.email.current.value = ""
        this.username.current.value = ""
        this.password.current.value = "";
      })
      .catch((error) => alert("Opps! There Is a Problem"))
    //Make sure this gets changed when sign up can post to data base
    window.location.replace('/signin')
  }

  render() {
    return (
      <div>
        <div className="PageSwitcher">
          <Link to="/signin" className="PageSwitcher__Item">Sign In</Link>
            ||
            <Link to="/signup" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</Link>
        </div>

        <div className="FormTitle">
          <NavLink to="/signin" activeClassName="FormTitle__Link--Active">Sign In</NavLink> or <NavLink to="/signup"
            activeClassName="FormTitle__Link--Active">Sign Up</NavLink>
        </div>

        {/* <div className="FormCenter">
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
                  <input type="password" id="password" className="FormField__Input" placeholder="Create a password" name="password" />
                </div>
                <div className="FormField">
                  <button className="FormField__Button mr-20">Submit</button><Link to="/signin" className="FormField__Link">Already signed up</Link>
                </div>
              </form>
            </div> */}
        <form>
          <label htmlFor="firstname">First Name: </label>
          <br />
          <input ref={this.firstname}></input>
          <br />
          <label htmlFor="lastname">Last Name: </label>
          <br />
          <input ref={this.lastname}></input>
          <br />
          <label htmlFor="email">Email: </label>
          <br />
          <input ref={this.email}></input>
          <br />
          <label htmlFor="username">User Name: </label>
          <br />
          <input ref={this.username}></input>
          <br />
          <label htmlFor="password" type="password">Password: </label>
          <br />
          <input ref={this.password}></input>
          <br />
          <button type="button" onClick={this.addUser}>Submit</button>
        </form>
      </div>
    )
  }
}

export default SignUp;