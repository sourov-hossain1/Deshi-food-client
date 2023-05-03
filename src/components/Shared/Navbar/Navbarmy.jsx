
import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbarmy = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='text-decoration-none'>Home</Link>
            <Link to="/blog" className='text-decoration-none'>Blog</Link>
          </Nav>
          <Nav>
            <Link to="/login">  <Button variant="primary">Login</Button></Link>
            <Link eventKey={2} to="/logout">
              <Button variant="danger">Logout</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarmy;