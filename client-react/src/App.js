import React from "react";
import AddTransaction from './screens/AddTransaction';
import "./App.css";
import History from "./screens/History";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Edit from "./screens/Edit"; 
import CurrentBalance from "./components/calculator/CurrentBalance"
import Header from "./components/Header"
import GlorifiedCalculator from "./components/calculator/GlorifiedCalculator";
import Income from "./screens/Income";
import Expense from "./screens/Expense";
import Savings from "./screens/Savings";
import Help from "./screens/Help"; 
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="budgeteer">
            <div className="head">
              <Header />
              <CurrentBalance />
            </div> 
          <GlorifiedCalculator />
          <Switch>
            <Route path="/signup" component={SignUp}/>
            <Route path="/login" component={Login}/>
            <Route path="/" exact component={ AddTransaction } />
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
