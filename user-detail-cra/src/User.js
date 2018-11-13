import React, { Component } from "react";
import PropTypes from "prop-types";
//Class Component User getting the details as props from App component
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.age
    };
  }

  incrementAge(value) {
    const newAge = parseInt(this.state.age) + parseInt(value);
    this.setState({ age: newAge });
  }

  render() {
    return (
      <div>
        <br />
        <p>
          Your name is {this.props.name} and age is {this.state.age}
        </p>
        <br />
        <h5>Skills</h5>
        <ul>{this.props.skills.map(item => <li> {item} </li>)}</ul>
        <hr/>
        
        <button class="btn" onClick={() => this.incrementAge(3)}>Make Me Older</button>
      </div>
    );
  }
}

//Validate the props
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.string,
  skills: PropTypes.array
};

export default User;