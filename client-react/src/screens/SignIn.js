import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import '../transaction.min.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
        // this.username = React.createRef();
        // this.password = React.createRef();
        
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this)
    };

    change(e) {
        // let target = e.traget;
        // let value = target.type === 'checkbox' ? target.checked : target.value;
        // let name = target.name;

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submit(e) {
        // e.preventDefault();
        // console.log('The form was submitted with the following data: ');
        // console.log(this.state)

        e.preventDefault();
        axios.post('/getToken', {
            username: this.state.username,
            password: this.state.password
        }).then(res => {
            localStorage.setItem('cool-jwt', res.data);
            this.props.history.push('/addTransaction');
        });
    }

    login = () => {
        let url = "http://localhost:3001/users/login";
        axios.post(url, {
            username: this.username.current.value,
            password: this.password.current.value
        })
        window.location.replace('/addTransaction')
    }



    render() {
        return (

            <div>
                {/* <div className="PageSwitcher">
                    <Link to="/signin" className="PageSwitcher__Item">Sign In</Link>
                    ||
                    <Link to="/signup" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</Link>
                </div> */}

                <div className="FormTitle">
                    {/* <Link to="/signin" className="FormTitle__Link">Sign In</Link> or <Link to="/signup" className="FormTitle__Link FormTitle__Link--Active">Sign Up</Link> */}

                    <NavLink to="/signin" activeClassName="FormTitle__Link--Active">Sign-In</NavLink> or <NavLink to="/signup" activeClassName="FormTitle__Link--Active">Sign-Up</NavLink>
                </div>
                {/* 
                <div className="FormCenter">
                    <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="username">Username</label>
                            <input type="text" id="username" className="FormField__Input" placeholder="Enter your username" name="username" value={this.state.username} onChange={this.handleChange}/>
                        </div>
                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="password">Password</label>
                            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange}/>
                        </div>
                        <div className="FormField">
                            <button className="FormField__Button mr-20">Submit</button>
                        </div>
                    </form>
                </div> */}

                <form>
                    <label htmlFor="username">User Name: </label>
                    <br />
                    <input ref={this.username}></input>
                    <br />
                    <label htmlFor="password">Password: </label>
                    <br />
                    <input ref={this.password} type="password"></input>
                </form>
                <button type="button" onClick={this.login}>Submit</button>
            </div>
        )
    }
}

export default Login;