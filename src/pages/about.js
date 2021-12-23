import React from 'react';
import Navbar from '../components/navbar';
import { useState } from 'react';
import Join from '../components/jointheclub';
import Officers from '../components/officers';
import AboutTheClub from '../components/abouttheclub';

const AboutPage = ( {clubInfo} ) => {

            function ShowAboutClub() {
        const [isDisplayed, setDisplayed] = useState(false);
        const toggleDisplay = () => setDisplayed(!isDisplayed);
        return (
          <>
          <button
            onClick={toggleDisplay}
            >about the club</button>
            {isDisplayed
	            ? <AboutTheClub clubInfo={clubInfo}/>
	            : <></>
            }
          </>
        );
    }

    function ShowJoinClub () {
        const [isDisplayed, setDisplayed] = useState(false);
        const toggleDisplay = () => setDisplayed(!isDisplayed);
        return (
          <>
          <button
            onClick={toggleDisplay}
            >join the club</button>
            {isDisplayed
	            ? <Join clubInfo={clubInfo}/>
	            : <></>
            }
          </>
        );

    }

    function ShowOfficers () {
        const [isDisplayed, setDisplayed] = useState(false);
        const toggleDisplay = () => setDisplayed(!isDisplayed);
        return (
          <>
          <button
            onClick={toggleDisplay}
            >officers</button>
            {isDisplayed
	            ? <Officers clubInfo={clubInfo}/>
	            : <></>
            }
          </>
        );

    }

    return (
        <>
            <Navbar/>
            <ShowAboutClub/>
            <br/>
            <ShowJoinClub/>
            <br/>
            <ShowOfficers/>
        </>
    );
}


export default AboutPage