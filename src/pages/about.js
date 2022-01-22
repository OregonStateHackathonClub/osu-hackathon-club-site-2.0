import React from 'react';
import NavigationBar from '../components/navbar';
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
            >mission & history</button>
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
            >current officers</button>
            {isDisplayed
	            ? <Officers clubInfo={clubInfo}/>
	            : <></>
            }
          </>
        );

    }

    return (
        <>
            <NavigationBar/>
            <div class="pagebody">
            <h1 class="pagetitle"> about the Oregon State hackathon club </h1>

              <ShowAboutClub/>
              <br/>
              <ShowJoinClub/>
              <br/>
              <ShowOfficers/>
            </div>
        </>
    );
}


export default AboutPage