import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import RightJellyBean from '../images/RightJellyBean.png'; 

function NavigationBar() {
    return (
      <Navbar variant="dark" bg="dark" expand="md">
        <Container> 
        <Navbar.Brand id='beaverhacks' href="/">
          <img
              src={RightJellyBean}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="Jelly Bean Facing Right"
              id="navbarJellyBean"
            />{' '}
      beaverhacks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/">upcoming events</Nav.Link>
            <Nav.Link href="about">about</Nav.Link>
            <Nav.Link href="archive">archive</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
  
  export default NavigationBar;