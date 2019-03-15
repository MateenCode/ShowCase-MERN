import React, { Component } from "react";
import { Spinner, Container, Row, Col } from "reactstrap";
import { animateScroll as scroll } from "react-scroll";
import { Consumer } from "../context/context";
import axios from "axios";

// components
import CardItem from "./CardItem";
import Footer from "./layout/Footer";

export default class CardList extends Component {
  state = {
    firstID: undefined,
    secondID: undefined
  };

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

  handleDrop = dispatch => {
    const firstID = this.state.firstID;
    const secondID = this.state.secondID;
    console.log(firstID, secondID);
    dispatch({
      type: "REPLACE_DATE",
      payload: { firstID, secondID }
    });

    axios.put("/api/swap", { firstID, secondID });

    this.setState({
      firstID: undefined,
      secondID: undefined
    });
  };

  handleDrag = id => {
    this.setState({
      firstID: id
    });
  };

  handleDragEnter = id => {
    this.setState({
      secondID: id
    });
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  scrollToBottom = () => {
    scroll.scrollToBottom();
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
              <span
                className="anchor_key far fa-hand-point-down float-right pr-4"
                onClick={this.scrollToBottom}
              />
              <Container>
                <Row>
                  {cards
                    .sort((a, b) => b.id - a.id)
                    .map(card => (
                      <Col className="card-group" key={card._id}>
                        <CardItem
                          className="handle"
                          card={card}
                          admin={admin}
                          toggle={this.toggle}
                          handleDrop={this.handleDrop.bind(this, dispatch)}
                          handleDrag={this.handleDrag.bind(this, card.id)}
                          handleDragEnter={this.handleDragEnter.bind(
                            this,
                            card.id
                          )}
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
              <span
                onClick={this.scrollToTop}
                className="anchor_key far fa-hand-point-up text-right pb-3 pr-4"
              />
              <Footer adminToggle={this.adminToggle.bind(this, dispatch)} />
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
