import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React, { Component } from "react";
import Form from "./form";
import Login from "./Login";
import Logout from "./Logout";
import Dashboard from "./Dashboard";

import './App.css';

export default class  App extends Component {
  render() {
    return(
    <Router>  
      <Switch>
          <Route path="/form">            <Form />          </Route>
          <Route path="/dashboard">            <Dashboard />          </Route>
          <Route path="/Logout">            <Logout />          </Route>
          <Route path='/'><Login/></Route>
        </Switch>
      </Router>
       )
  }
}
