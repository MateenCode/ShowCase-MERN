import React, { Component } from "react";
import "../css/Header.css";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar expand="md">
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="Navlink">
              <i className="icon" className="fas fa-folder-plus  fa-2x" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="Navlink"
              href={"https://github.com/MateenCode?tab=repositories"}
            >
              <i className="icon" className="fab fa-github fa-2x" />
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
