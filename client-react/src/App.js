import React from "react";
import Signup_Login from './screens/forms/Signup_Login';
import LoginForm from './screens/forms/LoginForm';
import AddTransaction from './screens/AddTransaction';
import "./App.css";
import History from "./screens/History";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Edit from "./screens/Edit"; 
//Don't forget to import once figured out 
// import CurrentBalance from "./components/calculator/CurrentBalance"
import Header from "./components/Header"
// import GlorifiedCalculator from "./components/calculator/GlorifiedCalculator";
import Income from "./screens/Income";
import Expense from "./screens/Expense";
import Savings from "./screens/Savings";
import Help from "./screens/Help"; 

// Ryan
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import SignOut from "./screens/SignOut";
import AuthenticatedComponent from "./authentication/AuthenticatedComponent"

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="budgeteer">
            <div className="head">
              <Header />
              {/* <CurrentBalance /> */}
            </div> 
          {/* <GlorifiedCalculator /> */}
          <Switch>
            <Route path="/signup" component={SignUp}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signin" component={SignOut}/>
            <Route path="/" exact component={ AddTransaction } />
            {/* Jeff made signup & Login page screens */}
            {/* go back thorugh and make everything uniform! */}
            <Route path="/" exact component={ Signup_Login } />
            <Route path="/loginform" component={ LoginForm } />
            {/* Go back to see if below works */}
            <AuthenticatedComponent>
            <Route path="/addTransaction" component={ AddTransaction } /> 
            </AuthenticatedComponent>
            {/* <Route path="/" exact component={ AddTransaction } /> */}
            <Route path="/history"  component={ History } />
            <Route path="/Income" component={ Income } />
            <Route path="/Expense" component={ Expense } />
            <Route path="/Savings" component={ Savings } />
            <Route path="/edit/:transactionid" component={ Edit } />
            <Route path="/Help" component={ Help } />
          </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
