import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import RightJellyBean from '../images/RightJellyBean.png'; 

function NavigationBar() {
    return (
      <Navbar variant="dark" bg="dark" expand="lg" fixed="top" >
        <Container> 
        <Navbar.Brand>          <img
              src={RightJellyBean}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="Jelly Bean Facing Right"
              id="navbarJellyBean"
            />{' '}
        </Navbar.Brand>
        <Navbar.Brand id='beaverhacks' className="d-none d-sm-block" href="/">beaverhacks</Navbar.Brand>
      
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