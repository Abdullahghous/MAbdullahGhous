import React from 'react';
import './header.css';
import { Navbar } from 'react-bootstrap';

function Header() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" fixed="top" className="header_container">
        <Navbar.Brand href="#" className="header_title_left">Software Engineer</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        {/* <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="#" className="header_li">Home</Nav.Link>
            <Link to="/aboutme">
            <Nav.Link  className="header_li">About Me</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse> */}
      </Navbar>
     </>
      
    )
}

export default Header
