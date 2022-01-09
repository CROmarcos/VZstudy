import React, { useState } from "react";
import "./HambyMenu.scss";
import slika from "../../slike/linije.png";
import Navigation from "../Navigation/Navigation";

const HambyMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const hide = () => setIsOpen(false);
  const show = () => setIsOpen(true);
  console.log(isOpen);

  return (
    <div className="Hamby" onClick={toggle} onBlur={hide} onFocus={show}>
      <img src={slika} alt="linije" />
      {isOpen ? <Navigation/> : null}
    </div>
  );
};

export default HambyMenu;
