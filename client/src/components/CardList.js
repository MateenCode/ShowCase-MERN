import React, { Component } from "react";
import { Consumer } from "../context/context";
import { Spinner } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import CardItem from "./CardItem";

export default class CardList extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { cards } = value;
          if (cards === undefined || cards.length === 0) {
            return (
              <Container style={{ textAlign: "center" }}>
                <Spinner color="dark" />
              </Container>
            );
          } else {
            return (
              <Container>
                <Row>
                  {cards.map(card => (
                    <Col className="card-group" key={card._id}>
                      <CardItem card={card} />
                    </Col>
                  ))}
                </Row>
              </Container>
            );
          }
        }}
      </Consumer>
    );
  }
}
