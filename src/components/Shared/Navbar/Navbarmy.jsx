
import React, { useContext } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Navbarmy = () => {

  const { user } = useContext(AuthContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >Deshi Food</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className='text-decoration-none text-white'>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/blog" className='text-decoration-none text-white'>Blog</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              {user && <Link className='text-decoration-none text-white'>
                <FaUserCircle style={{ fontSize: '1.5rem' }}></FaUserCircle>
              </Link>}
            </Nav.Link>
            <Nav.Link>
              {user ? <Link to='/logout' className='text-decoration-none text-white'>LogOut</Link>:
              <Link to="/login" className='text-decoration-none text-white'> Login</Link>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarmy;