import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import logo from "../../image/energy.png";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar expand="xs">
        <NavbarBrand className="float-left Navlink" href="/">
          <img className="logo" src={logo} />
          showcase
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="Navlink">
              <i className="icon fas fa-folder-plus  fa-2x" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="Navlink"
              href={"https://github.com/MateenCode?tab=repositories"}
            >
              <i className="icon fab fa-github fa-2x" />
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
