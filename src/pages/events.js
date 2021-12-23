import React from 'react';
import Navbar from '../components/navbar';
import logo from '../images/bh-logo-circle.png';
import { useState } from 'react';
import Info from '../components/info';
import FAQ from '../components/faq';
import Registration from '../components/registration';


const EventsPage = ( {currentHackathon} ) => {

    function ShowInfo() {
        const [isDisplayed, setDisplayed] = useState(false);
        const toggleDisplay = () => setDisplayed(!isDisplayed);
        return (
          <>
          <button
            onClick={toggleDisplay}
            >hackathon info</button>
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
            <Navbar/>
            <div class="pagebody"> 
            <h1 class="pagetitle"> {currentHackathon.title} </h1>
              <ShowInfo/>
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