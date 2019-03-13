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
    firstDate: 0,
    secondDate: 0
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
    const firstDate = this.state.firstCard;
    const secondDate = this.state.secondCard;
    console.log(firstDate, secondDate);
    dispatch({
      type: "REPLACE_DATE",
      payload: { firstDate, secondDate }
    });
  };

  handleDrag = id => {
    this.setState({
      firstCard: id
    });
  };

  handleDragEnter = id => {
    this.setState({
      secondCard: id
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
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .map(card => (
                      <Col className="card-group" key={card._id}>
                        <CardItem
                          className="handle"
                          card={card}
                          admin={admin}
                          toggle={this.toggle}
                          handleDrop={this.handleDrop.bind(this, dispatch)}
                          handleDrag={this.handleDrag.bind(this, card.date)}
                          handleDragEnter={this.handleDragEnter.bind(
                            this,
                            card.date
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
