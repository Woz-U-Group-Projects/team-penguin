import React from "react";
import Signup_Login from './screens/forms/Signup_Login';
import LoginForm from './screens/forms/LoginForm';
// import Signup_Login from './screens/forms/Signup_Login';
import Login from './screens/forms/LoginForm';
import AddTransaction from './screens/AddTransaction';
import "./App.css";
import History from "./screens/History";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Edit from "./screens/Edit";
//Don't forget to import once figured out 
import Header from "./components/Header";
import CurrentBalance from "./components/calculator/CurrentBalance";
import GlorifiedCalculator from "./components/calculator/GlorifiedCalculator";
import Income from "./screens/Income";
import Expense from "./screens/Expense";
import Savings from "./screens/Savings";
import Help from "./screens/Help";
import Links from './components/nav/Links';
import JuneStatements from './screens/JuneStatements';
import JanStatements from './screens/JanStatements';
import FebStatements from './screens/FebStatements';
import MarStatements from './screens/MarStatements';
import AprStatements from './screens/AprStatements';
import MayStatements from './screens/MayStatements';
import JulStatements from './screens/JulStatements';
import AugStatements from './screens/AugStatements';
import SepStatements from './screens/SepStatements';
import OctStatements from './screens/OctStatements';
import NovStatements from './screens/NovStatements';
import DecStatements from './screens/DecStatements';


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
          <Header />
            {/* <div className="head">
             
              <CurrentBalance />
            </div>
           
          <GlorifiedCalculator /> */}
          <Switch>
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signin" component={SignOut} />
            {/* <Route path="/" exact component={AddTransaction} /> */}
            <AuthenticatedComponent>
              <Route path="/addTransaction" component={AddTransaction} />
            </AuthenticatedComponent>
            <Route path="/" exact component={AddTransaction} />
            <Route path="/history" component={History} />
            <Route path="/Income" component={Income} />
            <Route path="/Expense" component={Expense} />
            <Route path="/Savings" component={Savings} />
            <Route path="/edit/:transactionid" component={Edit} />
            <Route path="/Help" component={Help} />

            <Route path="/JanStatements" component={JanStatements} />
            <Route path="/FebStatements" component={FebStatements} />
            <Route path="/MarStatements" component={MarStatements} />
            <Route path="/AprStatements" component={AprStatements} />
            <Route path="/MayStatements" component={MayStatements} />
            <Route path="/JuneStatements" component={JuneStatements} />
            <Route path="/JulStatements" component={JulStatements} />
            <Route path="/AugStatements" component={AugStatements} />
            <Route path="/SepStatements" component={SepStatements} />
            <Route path="/OctStatements" component={OctStatements} />
            <Route path="/NovStatements" component={NovStatements} />
            <Route path="/DecStatements" component={DecStatements} />
          </Switch>
          {/* <div className="form">
            <Links />
          </div> */}
        </div>
      </div>
      </div>
    </Router >
  );
}

export default App;
