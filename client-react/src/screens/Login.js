import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import '../transaction.min.css';
import Links from '../components/nav/Links';

class Login extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="PageSwitcher">
                        <Link to="/login" className="PageSwitcher__Item">Sign In</Link>
                        <Link to="/signup" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</Link>
                    </div>

                    <div className="FormTitle">
                        <Link to="/login" className="FormTitle__Link">Sign In</Link> or <Link to="/signup" className="FormTitle__Link FormTitle__Link--Active">Sign Up</Link>

                    </div>
                    <Route path="/login">
                        <h1>Sign In</h1>
                    </Route>
                </div>
            </Router>
        )
    }
}

export default Login;