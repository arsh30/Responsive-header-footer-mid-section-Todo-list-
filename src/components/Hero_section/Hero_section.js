import React, { Component } from "react";
import Table from "../Table/Table";
import UserForm from "../UserForm/UserForm";
import "./hero_section.css";

export default class Hero_section extends Component {
  render() {
    return (
      <div className="hero_Section">
        {/* <div className="form"> */}
          <UserForm />
        {/* </div> */}

        {/* <div className="table">
          <Table />
        </div> */}
      </div>
    );
  }
}
