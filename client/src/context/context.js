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
    case "UPDATE_ID":
      return {
        cards: state.cards.map(card => {
          if (card.id === action.payload.firstId) {
            return {
              ...card,
              id: action.payload.secondId
            };
          } else if (card.id === action.payload.secondId) {
            return {
              ...card,
              id: action.payload.firstId
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
    admin: false,
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  componentDidMount() {
    axios.get("/api/display").then(res => {
      const value = res.data.map((card, index) => {
        return {
          ...card,
          id: index
        };
      });

      this.setState(state => ({
        cards: value
      }));
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
