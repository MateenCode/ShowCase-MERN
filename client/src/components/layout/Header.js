import React, { Component } from "react";
import { animateScroll as scroll } from "react-scroll";

export default class Header extends Component {
  scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  render() {
    return (
      <React.Fragment>
        <hr />
        <span>
          <h1>Mateen Kazia</h1>
          <p>Demonstration page to display my work</p>
        </span>

        <i
          className="anchor_key far fa-hand-point-down float-right pr-4"
          onClick={this.scrollToBottom}
        />
      </React.Fragment>
    );
  }
}
