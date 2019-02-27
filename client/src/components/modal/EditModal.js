import React, { Component } from "react";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, ModalFooter } from "reactstrap";
import axios from "axios";

export default class EditModal extends Component {
  state = {
    title: undefined,
    image: undefined,
    description: undefined,
    github: undefined,
    liveLink: undefined
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    const { id } = this.props.match.params;
    const card = this.state;

    axios
      .put(`http://localhost:5000/api/update/${id}`, card)
      .then(() => {
        this.setState({
          title: undefined,
          image: undefined,
          description: undefined,
          github: undefined,
          liveLink: undefined
        });
        this.props.history.push("/");
      })
      .then(() => {
        window.location.reload();
      });
  };
  render() {
    const { title, image, description, github, liveLink } = this.state;
    return (
      <Container className="w-50">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>Title</Label>
            <Input
              name="title"
              defaultValue={title}
              onChange={this.handleChange}
              placeholder="title..."
            />
          </FormGroup>
          <FormGroup>
            <Label>Image</Label>
            <Input
              name="image"
              defaultValue={image}
              onChange={this.handleChange}
              placeholder="URL..."
            />
          </FormGroup>
          <FormGroup>
            <Label>Description</Label>
            <Input
              name="description"
              defaultValue={description}
              onChange={this.handleChange}
              placeholder="description..."
            />
          </FormGroup>
          <FormGroup>
            <Label>Github</Label>
            <Input
              name="github"
              defaultValue={github}
              onChange={this.handleChange}
              placeholder="Github..."
            />
          </FormGroup>
          <FormGroup>
            <Label>LiveLink</Label>
            <Input
              name="liveLink"
              defaultValue={liveLink}
              onChange={this.handleChange}
              placeholder="live..."
            />
          </FormGroup>
        </Form>
        <ModalFooter>
          <Button color="primary" onClick={this.handleSubmit}>
            Edit Project
          </Button>
          <Link to="/" className="btn btn-danger">
            Back
          </Link>
        </ModalFooter>
      </Container>
    );
  }
}
