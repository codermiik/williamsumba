import  { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./styles.css"

function Topnav() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <Navbar   className='nav' data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={toggleNavbar}
          aria-expanded={showNavbar} 
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`justify-content-center ${showNavbar ? 'show' : ''}`} 
        >
          <Nav>
            <Nav.Link as={Link} className='nav_link' to="/">Home</Nav.Link>
            <Nav.Link as={Link} className='nav_link' to="/projects"> Projects </Nav.Link>
            <Nav.Link as={Link} className='nav_link' to="/about">About</Nav.Link>
            <Nav.Link as={Link} className='nav_link' to="/contact">Contact</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topnav;
