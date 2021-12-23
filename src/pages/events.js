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
            >info</button>
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
            >faq</button>
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
            <ShowInfo/>
            <br/>
            <ShowFAQ/>
            <br/>
            <ShowRegistration/>
            <br/>
            <img src={logo} id="circle-logo" alt="beaverhackslogo"/>
        </>
    );
}


export default EventsPage