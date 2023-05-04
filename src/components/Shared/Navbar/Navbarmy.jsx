
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

            <Link to="/" className='text-decoration-none text-white'>Home</Link>


            <Link to="/blog" className='text-decoration-none text-white'>Blog</Link>

          </Nav>
          <Nav>

            {user &&
              <FaUserCircle style={{ fontSize: '1.5rem' }}></FaUserCircle>
            }


            {user ? <Link to='/logout' className='text-decoration-none text-white me-4'>LogOut</Link>:
            <Link to="/login" className='text-decoration-none text-white'> Login</Link>}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarmy;