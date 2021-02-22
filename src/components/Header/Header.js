import React, { Fragment } from "react";
import { Nav, Navbar, Image } from "react-bootstrap";

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#change-password">
      <h4>Change Password</h4>
    </Nav.Link>
    <Nav.Link href="#sign-out">
      <h4>Sign Out</h4>
    </Nav.Link>
  </Fragment>
);

const unauthenticatedOptions = (
  <Fragment>
    {/* <Nav.Link href='#sign-up'>Sign Up</Nav.Link> */}
    <Nav.Link href="#sign-in" className="mx-4">
      <h4>Log In</h4>
    </Nav.Link>
    {/* <Link to='/sign-in'>Sign In</Link> */}
  </Fragment>
);

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/" className="mx-4">
      <h4>Home</h4>
    </Nav.Link>
    <Nav.Link href="#about" className="mx-4">
      <h4>About</h4>
    </Nav.Link>
    {/* <Nav.Link href='#faq'>Faq</Nav.Link> */}
  </Fragment>
);

const Header = ({ user }) => (
  <Navbar bg="light" variant="light" expand="md">
    {/* <Navbar.Brand href='#'><Image src='./icons/logo.png'/></Navbar.Brand> */}
    <Navbar.Brand href="#">
      <Image className="mb-2" src="./icons/Header-Logo.png" width="200px" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        {user && (
          <span className="navbar-text mr-2 text-success">
            <h4>Welcome, {user.email}</h4>
          </span>
        )}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
