import React, { Component } from "react";
import "./css/App.css";
import { Container, Row, Col } from "reactstrap";

import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <hr />
        <Container>card</Container>
      </React.Fragment>
    );
  }
}

export default App;
