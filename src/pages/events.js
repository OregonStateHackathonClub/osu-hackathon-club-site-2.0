import React from 'react';
import NavigationBar from '../components/navbar';
import logo from '../images/bh-logo-circle.png';
import { useState } from 'react';
import Info from '../components/info';
import FAQ from '../components/faq';
import Registration from '../components/registration';
import CategoriesAndPrizes from '../components/categoriesandprizes';


const EventsPage = ( {currentHackathon} ) => {

    function ShowInfo() {
        const [isDisplayed, setDisplayed] = useState(false);
        const toggleDisplay = () => setDisplayed(!isDisplayed);
        return (
          <>
          <button
            onClick={toggleDisplay}
            >upcoming hackathon info</button>
            {isDisplayed
	            ? <Info currentHackathon={currentHackathon}/>
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
	            ? <FAQ currentHackathon={currentHackathon}/>
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
            ? <CategoriesAndPrizes currentHackathon={currentHackathon}/>
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
	            ? <Registration currentHackathon={currentHackathon}/>
	            : <></>
            }
          </>
        );

    }

    return (
        <>
            <NavigationBar/>
            <div class="pagebody"> 
            <h1 class="pagetitle"> next hackathon: {currentHackathon.title} </h1>
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
        </>
    );
}


export default EventsPage