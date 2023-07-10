import React from 'react';

function Registration() {
    return (
        <>
            <div className="infobody">
                <h2>how to register:</h2>
                {/* Update Devpost Link Each Hackathon */}
                <p>To join the next hackathon, sign up for Beaverhacks on <button className="joinclubbuttons"><a href="https://devpost.com/hackathons?organization=Oregon%20State%20University%20Hackathon%20Club" target="_blank" rel="noreferrer noopener">DevPost</a></button>, fill out the registration form 
                    <button className="joinclubbuttons"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfEvk6Fpxq4cQaWubiYSIWUQv-bJaCZYXZ1oKwMWO2o5FVi8g/viewform" target="_blank" rel="noreferrer noopener"> Google Form </a></button>
                    and join the club via <button className="joinclubbuttons"><a href="https://apps.ideal-logic.com/osusli" target="_blank" rel="noreferrer noopener">IdealLogic</a></button></p>

            </div>
            <div className="infobody">
                <h2>find your team: </h2>

                {/* Update Devpost Link Each Hackathon */}
                <p>Use <button className="joinclubbuttons"><a href="https://beaver-hacks-spring-2023.devpost.com/" target="_blank" rel="noreferrer noopener">DevPost</a></button> or <button className="joinclubbuttons"><a href="https://discord.gg/pCesGNGjPc" target="_blank" rel="noreferrer noopener">Discord</a></button> to find teammates.</p>
            </div>
        </>
    );
}


export default Registration
