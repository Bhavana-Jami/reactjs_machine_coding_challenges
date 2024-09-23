import React, { useState } from "react";

import "./Navbar.css";
function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar_title">Affirm</div>
      <div>
        <ul className={active ? "responsive_navbar_links" : "navbar_links"}>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Github</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="hamburger_icon" onClick={() => setActive(!active)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
