import React, { Component } from "react";
import { Consumer } from "../../context/context";

export default class Footer extends Component {
  adminModeToggle = dispatch => {
    dispatch({
      type: "toggle_admin"
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <React.Fragment>
              <hr />
              <div
                className="tool-icon"
                onClick={this.adminModeToggle.bind(this, dispatch)}
              >
                <i className="icon fas fa-tools  fa-2x" />
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
