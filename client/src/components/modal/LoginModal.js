import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Input, Label, FormGroup } from "reactstrap";
import { Consumer } from "../../context/context";

export default class LoginModal extends Component {
  state = {
    password: "",
    error: undefined
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  removeErr = () => {
    this.setState({
      error: undefined
    });
  };

  handleSubmit = (dispatch, e) => {
    e.preventDefault();
    if (this.state.password === "password") {
      dispatch({
        type: "TOGGLE_ADMIN"
      });
      this.props.toggle();
      this.setState({
        error: undefined
      });
    } else {
      this.setState({
        error: "We don't want no trouble"
      });
    }
    this.setState({
      password: ""
    });
  };

  render() {
    const { modal, toggle } = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <Modal isOpen={modal} toggle={toggle.bind()}>
              <ModalHeader toggle={toggle}>Admin Login</ModalHeader>
              <ModalBody className="text-center">
                {this.state.error && (
                  <span className="error" onClick={this.removeErr}>
                    <span className="text-danger pr-3">{this.state.error}</span>
                    <i className="text-muted fas fa-times" />
                  </span>
                )}
                <h5>You're not from around here, are you?</h5>
                <i className="far fa-angry" />
                <FormGroup>
                  <Label for="examplePassword">
                    Whats the password bud...?
                  </Label>
                  <Input
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                    name="password"
                    placeholder="Password..."
                  />
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
                <Button
                  color="info"
                  onClick={this.handleSubmit.bind(this, dispatch)}
                >
                  Login
                </Button>
              </ModalFooter>
            </Modal>
          );
        }}
      </Consumer>
    );
  }
}
