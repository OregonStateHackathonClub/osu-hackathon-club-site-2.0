import React from 'react';
import NavigationBar from '../components/navbar';
import logo from '../images/bh-logo-circle.png';
import { useEffect, useState } from 'react';
import Info from '../components/hackathoninfo';
import FAQ from '../components/faq';
import Registration from '../components/registration';
import CategoriesAndPrizes from '../components/categoriesandprizes';
import Footer from '../components/footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const EventsPage = () => {

  function LandingPage() {
    return (
      <div className='background-gradient'>
          <h1 className='bigText'>Hackathon Club at Oregon State</h1>
          <h1 className='smallText'>Where beavers code.</h1>
        </div>
    );
  }
  function ShowFAQ() {

    return (
      <Container>
        <Row>
          <Col md><FAQ /></Col>
          <Col md><Registration /></Col>
        </Row>
      </Container>

    );
  }

  return (
    <>
      <NavigationBar />
      <LandingPage />
      <div className="pagebody">
        <Info />
        <br />
        <CategoriesAndPrizes />
        <br />
        <ShowFAQ />
        <br />
        <Footer />
      </div>

    </>
  );
}


export default EventsPage
