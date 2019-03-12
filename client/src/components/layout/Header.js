import React from "react";

export default function Header(props) {
  return (
    <React.Fragment>
      <hr />
      <span>
        <h1>Mateen Kazia</h1>
        <p>Demonstration page to display my work</p>
      </span>
      <i
        className="anchor_key far fa-hand-point-down float-right pr-4"
        onClick={props.scrollToBottom}
      />
    </React.Fragment>
  );
}
