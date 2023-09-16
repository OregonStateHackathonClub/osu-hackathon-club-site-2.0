import React from 'react';
import NavigationBar from '../components/navbar';
import { useState } from 'react';
import Join from '../components/jointheclub';
import Officers from '../components/officers';
import AboutTheClub from '../components/missionandhistory';
import Footer from '../components/footer';

const AboutPage = () => {

            function ShowAboutClub() {
              return (
                <AboutTheClub />
              );
    }

    function ShowJoinClub () {
        return (
          < Join />
        );
    }
  
  function ShowOfficers() {
    return (
      <Officers />
    );
  }

    return (
        <>
        <NavigationBar />
        <br />
          <h1 className="smallText"> About the Club </h1>
            <div className="pagebody">
              <ShowAboutClub/>
              <br />
              <ShowJoinClub/>
              <br/>
          <ShowOfficers />
          <Footer />
            </div>
            
        </>
    );
}


export default AboutPage