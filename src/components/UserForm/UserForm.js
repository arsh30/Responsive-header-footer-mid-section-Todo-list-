import "./userform.css";
import React, { Component } from "react";

export default class UserForm extends Component {
  render() {
    return (
      <form action="">
        <div className="name">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" autoComplete="off" />
        </div>

        <div className="state">
          <label htmlFor="state">State: </label>
          <input type="text" id="state" autoComplete="off" />
        </div>

        <div className="name">
          <label htmlFor="contact">Contact: </label>
          <input type="text" id="contact" autoComplete="off" />
        </div>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
