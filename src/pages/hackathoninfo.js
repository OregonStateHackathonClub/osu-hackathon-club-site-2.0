import React from 'react';
import NavigationBar from '../components/navbar';
import logo from '../images/bh-logo-circle.png';
import { useState } from 'react';
import Info from '../components/hackathoninfo';
import FAQ from '../components/faq';
import Registration from '../components/registration';
import CategoriesAndPrizes from '../components/categoriesandprizes';
import Footer from '../components/footer';



const EventsPage = ( ) => {

    function ShowInfo() {
        const [isDisplayed, setDisplayed] = useState(false);
        const toggleDisplay = () => setDisplayed(!isDisplayed);
        return (
          <>
          <button
            onClick={toggleDisplay}
            >upcoming hackathon info</button>
            {isDisplayed
	            ? <Info/>
	            : <></>
            }
          </>
        );
    }

    function ShowFAQ () {
        const [isDisplayed, setDisplayed] = useState(false);
        const toggleDisplay = () => setDisplayed(!isDisplayed);
        return (
          <>
          <button
            onClick={toggleDisplay}
            >frequently asked questions</button>
            {isDisplayed
	            ? <FAQ/>
	            : <></>
            }
          </>
        );

    }

    function ShowCategoriesAndPrizes () {
      const [isDisplayed, setDisplayed] = useState(false);
      const toggleDisplay = () => setDisplayed(!isDisplayed);
      return (
        <>
        <button
          onClick={toggleDisplay}
          >team categories and prizes</button>
          {isDisplayed
            ? <CategoriesAndPrizes/>
            : <></>
          }
        </>
      );

  }

    function ShowRegistration () {
        const [isDisplayed, setDisplayed] = useState(false);
        const toggleDisplay = () => setDisplayed(!isDisplayed);
        return (
          <>
          <button
            onClick={toggleDisplay}
            >registration</button>
            {isDisplayed
	            ? <Registration/>
	            : <></>
            }
          </>
        );

    }

    return (
        <>
            <NavigationBar/>
            <h1 className="pagetitle">hackathon info</h1>
            <div className="pagebody"> 
              <ShowInfo/>
              <br/>
              <ShowCategoriesAndPrizes/>
              <br/>
              <ShowFAQ/>
              <br/>
              <ShowRegistration/>
              <br/>
              <img src={logo} id="circlelogo" alt="beaverhackslogo"/>
            </div>
            <Footer/>
        </>
    );
}


export default EventsPage