import React from "react";

export default function Footer(props) {
  return (
    <React.Fragment>
      <hr />
      <div onClick={props.toggle} className="tool-icon">
        <i className="icon fas fa-tools  fa-2x" />
      </div>
    </React.Fragment>
  );
}
