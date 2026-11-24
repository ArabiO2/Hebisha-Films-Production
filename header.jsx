import { useState } from "react";
import "./header.css";
import fav from "./fav.jpg";
import fav2 from "./fav2.jpg";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen((prev) => !prev);
  }
  return (
    <header>
      <div className="cont">
        <span className="toggle-menu" onClick={toggle}>
          @
        </span>
        <div className="logo">
          <img src={fav2} alt="oh" />
        </div>
        <div className={isOpen ? "links links-on" : "links"}>
          <span>Home</span>
          <span>Restaurant</span>
          <span>About</span>
        </div>
      </div>
    </header>
  );
}
