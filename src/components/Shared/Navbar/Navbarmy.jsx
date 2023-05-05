
import React, { useContext } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Navbarmy = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then()
    .catch(error => console.log(error))
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >Deshi Food</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <Link to="/" className='text-decoration-none text-white me-2'>Home</Link>


            <Link to="/blog" className='text-decoration-none text-white'>Blog</Link>

          </Nav>
          <Nav>

              <div>
              <FaUserCircle style={{ fontSize: '1.5rem' }}></FaUserCircle>
              </div>


            {user ? <Button className='text-decoration-none text-white me-4' onClick={handleLogOut}>LogOut</Button>:
            <Link to="/login" className='text-decoration-none text-white'> Login</Link>}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarmy;