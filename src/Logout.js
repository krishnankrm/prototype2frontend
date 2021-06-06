import React, { Component } from "react";

import './App.css';

export default class  App extends Component {
    componentDidMount()
    {
        localStorage.removeItem("token");
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjI4MDEzMzcsImV4cCI6MTYyMzQwNjEzN30.PaC1LsXX4qNVgZhGh-X5qjXl3GA0BYbjkLxJvJKIpDU");
        window.location.replace("/")
    }
  render() {
    return(
    1  
      
       )
  }
}