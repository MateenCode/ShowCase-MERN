import React from "react";
import { Navbar, NavbarBrand, Media } from "reactstrap";

export default function Header() {
  return (
    <Navbar light expand="sm">
      <NavbarBrand href="/">
        <Media
          className="energy-img"
          width="8%"
          src={require("../image/energy.png")}
          alt="Card image cap"
        />
      </NavbarBrand>
    </Navbar>
  );
}
