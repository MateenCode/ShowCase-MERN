import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import logo from "../../image/energy.png";
import AddModal from "../modal/AddModal";
import { Consumer } from "../../context/context";
import axios from "axios";

export default class Navigation extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  addCard = (dispatch, card) => {
    axios.post("api/add", {
      title: card.title,
      image: card.image,
      description: card.description,
      github: card.github,
      liveLink: card.liveLink
    });
    dispatch({
      type: "add",
      payload: card
    });
    this.setState({
      modal: false
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch, adminMode } = value;
          if (adminMode === false) {
            return (
              <React.Fragment>
                <Navbar expand="xs">
                  <NavbarBrand className="float-left Navlink" href="/">
                    <img className="logo" alt="jsx-a11y/alt-text" src={logo} />
                    showcase
                  </NavbarBrand>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink className="Navlink" />
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className="Navlink"
                        href={"https://github.com/MateenCode?tab=repositories"}
                        target="_blank"
                      >
                        <i className="icon fab fa-github fa-2x" />
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Navbar>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment>
                <Navbar expand="xs">
                  <NavbarBrand className="float-left Navlink" href="/">
                    <img className="logo" alt="jsx-a11y/alt-text" src={logo} />
                    showcase
                  </NavbarBrand>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink className="Navlink">
                        <span onClick={this.toggle}>
                          <i className="icon fas fa-folder-plus  fa-2x" />
                        </span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className="Navlink"
                        href={"https://github.com/MateenCode?tab=repositories"}
                        target="_blank"
                      >
                        <i className="icon fab fa-github fa-2x" />
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Navbar>
                <AddModal
                  modal={this.state.modal}
                  toggle={this.toggle}
                  addCard={this.addCard.bind(this, dispatch)}
                />
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}
