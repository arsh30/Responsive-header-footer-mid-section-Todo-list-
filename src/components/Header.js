import "./header1.css";

import React, { Component } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      click: false,
    };
  }

  handleClick() {
    this.setState({
      click: !this.state.click,
    });
  }

  render() {
    console.log(this.state.click);
    return (
      <header className={this.state.click ? "header active" : "header"}>
        {/* <div className="logo"> */}
        <Link to="#" className="logo">
          <h2>Tech Star</h2>
        </Link>
        {/* </div> */}

        <nav className="navbar">
          <ul className="menu-links">
            <li>
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-links">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-links">
                Contact
              </Link>
            </li>
            <li>
              <Link to="https://youtube.com" className="nav-links">
                Services
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mobile-view-btns" onClick={() => this.handleClick()}>
          <RxHamburgerMenu className="mobile-nav-btn hamburger" />
          <RxCross1 className="mobile-nav-btn close" />
        </div>
      </header>
    );
  }
}
