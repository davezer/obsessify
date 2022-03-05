import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation() {
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Obsessify
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li>{/* add links need for navbar */}</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
