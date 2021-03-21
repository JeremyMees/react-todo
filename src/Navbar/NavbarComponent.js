import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar sticky="top" bg="white" variant="light">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link className="justify-content-end" href="#home" onClick={() => alert("Nothing here")}>
            About
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
