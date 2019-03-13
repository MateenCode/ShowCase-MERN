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
    firstDate: undefined,
    secondDate: undefined
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
    const firstDate = this.state.firstDate;
    const secondDate = this.state.secondDate;
    dispatch({
      type: "REPLACE_DATE",
      payload: { firstDate, secondDate }
    });

    axios.put("http://localhost:5000/api/swap", { firstDate, secondDate });
  };

  handleDrag = date => {
    this.setState({
      firstDate: date
    });
  };

  handleDragEnter = date => {
    this.setState({
      secondDate: date
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
