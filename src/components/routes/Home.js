import React, { Component } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header";
import Hero_section from "../Hero_section/Hero_section";
import Table from "../Table/Table";
import UserForm from "../UserForm/UserForm";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* make div tag - jiski width 100% rhegi and 2 component honge 
        jiski width 50% 50% hogi */}

        {/* <div className="data">
          <Table />
          <UserForm />
        </div> */}

        <Hero_section />

        <Footer />
      </div>
    );
  }
}
