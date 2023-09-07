import React from 'react';
import NavigationBar from '../components/navbar';
import { useState } from 'react';
import Join from '../components/jointheclub';
import Officers from '../components/officers';
import AboutTheClub from '../components/missionandhistory';
import Footer from '../components/footer';

const AboutPage = () => {

            function ShowAboutClub() {
        const [isDisplayed, setDisplayed] = useState(false);
        const toggleDisplay = () => setDisplayed(!isDisplayed);
        return (
          <>
          <button
            onClick={toggleDisplay}
            >Mission & History</button>
            {isDisplayed
	            ? <AboutTheClub/>
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
            >Join the Club</button>
            {isDisplayed
	            ? <Join/>
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
            >Current Officers</button>
            {isDisplayed
	            ? <Officers/>
	            : <></>
            }
          </>
        );

    }

    return (
        <>
            <NavigationBar/>
            <h1 className="pagetitle"> About the Club </h1>
            <div className="pagebody">
              <ShowAboutClub/>
              <br/>
              <ShowJoinClub/>
              <br/>
              <ShowOfficers/>
            </div>
            <Footer/>
        </>
    );
}


export default AboutPage