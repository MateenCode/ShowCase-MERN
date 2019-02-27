import React, { Component } from "react";
import { Consumer } from "../context/context";
import { Spinner } from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
import CardItem from "./CardItem";

export default class CardList extends Component {
  handleDelete = (id, dispatch) => {
    dispatch({
      type: "delete",
      payload: id
    });
    axios.delete(`/api/delete/${id}`);
  };
  handleUpdate = (id, card) => {
    console.log(card);
    axios.put(`/api/update/${id}`, {
      card
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { cards, dispatch, adminMode } = value;
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
                        adminMode={adminMode}
                        toggle={this.toggle}
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
