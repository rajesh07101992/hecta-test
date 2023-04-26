import React from 'react'
import '../Header/style.css'
import '../Header/responsive.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux'

export const Header = () => {
  const loggedIn = useSelector(state => state.users.isLoggedIn);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (event) => {
    setActiveLink(event.target.pathname);
  };
  const logout=()=>{
    localStorage.removeItem('token');
    window.location.reload();
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" className="navBackground">
        <Container>
          <Navbar.Brand href="/">
            <img src='./images/logo.svg' alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="https://hecta.co/" target="_blank" onClick={handleLinkClick}>Home</Nav.Link> */}
              <Nav.Link className={activeLink === '/' ? 'active' : ''} onClick={handleLinkClick}>
                <Link className='navLink' to='/'>Home</Link>
              </Nav.Link>
              <Nav.Link className={activeLink === '/upcoming-auctions' ? 'active' : ''} onClick={handleLinkClick}>
                <Link className='navLink' to='/upcoming-auctions'>Upcoming Auctions</Link>
              </Nav.Link>
              <Nav.Link className={activeLink === '/live-auction' ? 'active' : ''} onClick={handleLinkClick}>
                <Link className='navLink'  to='/live-auction'>Live Auction</Link>
              </Nav.Link>
              <Nav.Link href="" className={activeLink === '/my-auctions' ? 'active' : ''} onClick={handleLinkClick}>
                <Link  className='navLink' to='/my-auctions'>My Auctions</Link>
              </Nav.Link>
              <Nav.Link className={activeLink === '/private-treaty' ? 'active' : ''} onClick={handleLinkClick}>
                <Link className='navLink' to="/private-treaty">Private Treaty</Link>
              </Nav.Link>
              <Nav.Link className={activeLink === '/contact-us' ? 'active' : ''} onClick={handleLinkClick}>
                <Link className='navLink' to="/contact-us">Contact Us</Link>
              </Nav.Link>
              <Nav.Link className={activeLink === '/about-us' ? 'active' : ''} onClick={handleLinkClick}>
                <Link className='navLink' to="/about-us">About Us</Link>
              </Nav.Link>
              {/* <Nav.Link href="https://hecta.co/contact-us/" target="_blank" onClick={handleLinkClick}>Contact Us</Nav.Link>
              <Nav.Link href="https://hecta.co/about-us/" target="_blank" onClick={handleLinkClick}>About Us</Nav.Link> */}

            </Nav>
            <Nav>
              {loggedIn ? (
            
                <NavDropdown title="My Account" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link to='/my-account' className='navLink'>Dashboard</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                 <Link  className='navLink' onClick={logout}>Logout</Link>
                </NavDropdown.Item>
               
              </NavDropdown>
              ) : (
                <Link to="/login" className='btnDark'>Login</Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
