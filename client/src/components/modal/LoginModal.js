import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Input, Label, FormGroup } from "reactstrap";

export default class LoginModal extends Component {
  render() {
    const { modal, adminToggle } = this.props;
    return (
      <Modal isOpen={modal} toggle={adminToggle}>
        <ModalHeader toggle={adminToggle}>Admin Login</ModalHeader>
        <ModalBody className="text-center">
          <h5>You're not from around here, are you?</h5>
          <i className="far fa-angry" />
          <FormGroup>
            <Label for="examplePassword">Whats the password bud...?</Label>
            <Input type="password" name="password" placeholder="Password..." />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={adminToggle}>
            Cancel
          </Button>
          <Button color="info" onClick={adminToggle}>
            Login
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
