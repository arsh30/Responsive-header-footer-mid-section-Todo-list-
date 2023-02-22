import "./userform.css";
import React, { Component } from "react";
import Table from "../Table/Table";

// const dataContext = React.createContext();

export default class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      state: "",
      contact: "",
      items: [],
    };
  }
  submitForm = (e) => {
    e.preventDefault();

    // console.log(this.state.name);
    const newEntry = {
      name: this.state.name,
      state: this.state.state,
      contact: this.state.contact,
    };
    console.log("NEWeNRTY", newEntry);
    this.setState({
      items: [...this.state.items, newEntry],
    });
  };

  render() {
    // console.log(this.state.name);
    // console.log(this.state.state);
    // console.log(this.state.contact);

    console.log(this.state.items);
    // console.log(newEntry);

    const { items } = this.state;

    return (
      <div className="parent_div">
        <form onSubmit={this.submitForm}>
          <div className="name">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              autoComplete="off"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="state">
            <label htmlFor="state">State: </label>
            <input
              type="text"
              id="state"
              autoComplete="off"
              value={this.state.state}
              onChange={(e) => this.setState({ state: e.target.value })}
            />
          </div>

          <div className="name">
            <label htmlFor="contact">Contact: </label>
            <input
              type="text"
              id="contact"
              autoComplete="off"
              value={this.state.contact}
              onChange={(e) => this.setState({ contact: e.target.value })}
            />
          </div>

          <input type="submit" value="Submit" />
        </form>

        <Table data={items}/>
      </div>
    );
  }
}
