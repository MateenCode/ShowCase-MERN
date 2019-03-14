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
    case "REPLACE_DATE":
      return {
        cards: state.cards.map(card => {
          if (card.id === action.payload.firstID) {
            return {
              ...card,
              id: action.payload.secondID
            };
          } else if (card.id === action.payload.secondID) {
            return {
              ...card,
              id: action.payload.firstID
            };
          } else {
            return card;
          }
        })
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    cards: [],
    admin: true,
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/display").then(res => {
      const value = res.data;
      this.setState({
        cards: value
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
