import React, { Component } from "react";
import { Consumer } from "../context/context";
import { Spinner } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import CardItem from "./CardItem";

export default class CardList extends Component {
  handleDelete = (id, dispatch) => {
    axios.delete(`/api/delete/${id}`).then(() =>
      dispatch({
        type: "delete",
        payload: id
      })
    );
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { cards, dispatch } = value;
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
                      <CardItem
                        card={card}
                        handleDelete={this.handleDelete.bind(
                          this,
                          card._id,
                          dispatch
                        )}
                      />
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
