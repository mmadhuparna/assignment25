import React, { Component } from "react";
import "./App.css";
import User from "./User";

//Class Component App passing a user details to another class component User
class App extends Component {
    render() {
    return (
      <div>
        <h3 class="page-header">Hi, This is a React App</h3>
        <User name="Sam" age="38" skills={["sleeping", "writing codes"]} />
      </div>
    );
  }
}

export default App;