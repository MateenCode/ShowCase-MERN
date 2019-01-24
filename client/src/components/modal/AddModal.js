import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default class AddModal extends Component {
  state = {
    title: "",
    image: "",
    description: "",
    github: "",
    liveLink: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const card = this.state;
    this.props.addCard(card);
    this.setState({
      title: "",
      image: "",
      description: "",
      github: "",
      liveLink: ""
    });
  };

  render() {
    const { modal, toggle } = this.props;
    const { title, image, description, github, liveLink } = this.state;
    return (
      <React.Fragment>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Project Details</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label>Title</Label>
                <Input
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                  placeholder="title..."
                />
              </FormGroup>
              <FormGroup>
                <Label>Image</Label>
                <Input
                  name="image"
                  value={image}
                  onChange={this.handleChange}
                  placeholder="URL..."
                />
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <Input
                  name="description"
                  value={description}
                  onChange={this.handleChange}
                  placeholder="description..."
                />
              </FormGroup>
              <FormGroup>
                <Label>Github</Label>
                <Input
                  name="github"
                  value={github}
                  onChange={this.handleChange}
                  placeholder="Github..."
                />
              </FormGroup>
              <FormGroup>
                <Label>LiveLink</Label>
                <Input
                  name="liveLink"
                  value={liveLink}
                  onChange={this.handleChange}
                  placeholder="live..."
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>
              Add Project
            </Button>
            <Button color="danger" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}
