import React from "react";
import logo from "../../images/VectorHeader.png";

function Header() {
  return (
    <header className="header__content">
      <img
        src={logo}
        className="header__logo"
        alt="Logo vetorizado da palavra Around"
      />
    </header>
  );
}

export default Header;
