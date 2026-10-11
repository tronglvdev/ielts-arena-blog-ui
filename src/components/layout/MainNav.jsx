import React from "react";
import { NAV_ITEMS } from "../../data/navigation";

function MainNav() {
  return (
    <div className="main-nav">
      <div className="main-nav-container">
        <div className="logo-text">
          <img src="/images/logo.png" alt="IELTS ARENA Logo" />
        </div>
        <nav className="menu" aria-label="Main Navigation">
          <ul className="nav-menu">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="nav-item">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="test-online">
          <button type="button" className="btn-test-online">
            Test Online
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainNav;
