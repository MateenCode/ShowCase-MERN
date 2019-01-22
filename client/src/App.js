import React, { Component } from "react";
import "./css/App.css";
import { Container, Row, Col } from "reactstrap";

// Imported Components
import Navbar from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <hr />
        <span>
          <h1>ShowCase </h1>
          <p>Demonstration page to display my work</p>
        </span>
        <Container>cards</Container>
      </React.Fragment>
    );
  }
}

export default App;
