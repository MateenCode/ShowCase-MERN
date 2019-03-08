import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CARD":
      return {
        cards: [action.payload, ...state.cards]
      };
    case "DELETE_CARD":
      return {
        cards: state.cards.filter(card => card._id !== action.payload)
      };
    case "TOGGLE_ADMIN":
      return {
        admin: !state.admin
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    cards: [],
    admin: false,
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  componentDidMount() {
    axios.get("/api/display").then(res => {
      this.setState({
        cards: res.data
      });
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
