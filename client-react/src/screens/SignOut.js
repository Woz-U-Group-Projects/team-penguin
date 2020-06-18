import React, {Component} from 'react';
import axios from "axios";

import '../transaction.min.css';

class SignOut extends Component {
    //     super();
    //     this.state = {}
    // }

    signout = () => {
        let url = "http://localhost:3001/users/logout";
        axios.post(url 
        //     , {
        //     username: this.username.current.value,
        //     password: this.password.current.value
        // }
        )
        window.location.replace('/signin')
    }
    // render() {
    //     return (
    //         <NavLink to="/signout" onCLick={this.signout}>Sign Out</NavLink>
    //     )
    // }
}

export default SignOut;