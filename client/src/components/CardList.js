import React, { Component } from "react";
import { Spinner, Container, Row, Col } from "reactstrap";
import { Consumer } from "../context/context";
import axios from "axios";

// components
import CardItem from "./CardItem";
import Footer from "./layout/Footer";

export default class CardList extends Component {
  adminToggle = dispatch => {
    dispatch({
      type: "TOGGLE_ADMIN"
    });
  };
  handleDelete = (id, dispatch) => {
    dispatch({
      type: "DELETE_CARD",
      payload: id
    });
    axios.delete(`/api/delete/${id}`);
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { cards, dispatch, admin } = value;

          return cards === undefined || cards.length === 0 ? (
            <Container style={{ textAlign: "center" }}>
              <Spinner color="dark" />
            </Container>
          ) : (
            <React.Fragment>
              <Container>
                <Row>
                  {cards.map(card => (
                    <Col className="card-group" key={card._id}>
                      <CardItem
                        card={card}
                        admin={admin}
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
              <Footer adminToggle={this.adminToggle.bind(this, dispatch)} />
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
