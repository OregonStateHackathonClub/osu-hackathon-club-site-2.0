import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import RightJellyBean from '../images/RightJellyBean.png'; 

function NavigationBar() {
    return (
      <Navbar variant="dark" bg="dark" expand="xl" fixed="top" id="navbar">
        <Container> 
        <Navbar.Brand>          
          <img
              src={RightJellyBean}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="Jelly Bean Facing Right"
              id="navbarJellyBean"
          />{' '}
        </Navbar.Brand>
          <Navbar.Brand style={{ fontSize: 25 }} id='beaverhacks' className="d-none d-sm-block h1" href="/">Hackathon Club At Oregon State</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
          <Nav>
            <Nav.Link href="/">hackathon info</Nav.Link>
            <Nav.Link href="about">about the club</Nav.Link>
            <Nav.Link href="archive">archive</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
  
  export default NavigationBar;