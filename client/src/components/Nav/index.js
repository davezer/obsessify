import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation(props) {
  const tabs = ['MyCollection']
  return (
    <Navbar className="navbar sticky-top" id="navbar" bg="" expand="md">
      <Container className="brand-con">
        <Navbar.Brand className ="brand" href="./index.html">Obsessify</Navbar.Brand>
      </Container>
      <Container>  
        <Nav className="nav-links">
          {tabs.map(tab => (
          <ul className="nav-item" key={tab}>
            <a
              href={'#' + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? 'nav-link active' : 'nav-link'
              }
            >
              {tab}
            </a>
          </ul>
        ))}
          {/* <Nav.Link className="nav-link" href="#about">About</Nav.Link>
          <Nav.Link className="nav-link" href="#experience">Experience</Nav.Link>
          <Nav.Link className="nav-link" href="#featured">Projects</Nav.Link>
          <Nav.Link className="nav-link" href="#contact">Contact</Nav.Link> */}
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
