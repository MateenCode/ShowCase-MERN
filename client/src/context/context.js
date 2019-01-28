import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  if (action.type === "add") {
    return {
      cards: [action.payload, ...state.cards]
    };
  } else if (action.type === "delete") {
    return {
      cards: state.cards.filter(card => card._id !== action.payload)
    };
  } else if (action.type === "toggle_admin") {
    return {
      adminMode: !state.adminMode
    };
  }
};

export class Provider extends Component {
  state = {
    cards: [],
    adminMode: false,
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
