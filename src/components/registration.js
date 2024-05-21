import React from 'react';

function Registration() {
    return (
        <>
            <h2>How To Register:</h2>
            <div className="infobody">
                {/* Update Devpost Link Each Hackathon */}
                <p>To join the next hackathon, sign up on <button className="joinclubbuttons"><a href="https://spring-2024-retro.devpost.com" target="_blank" rel="noreferrer noopener">DevPost </a></button> and join the club via <button className="joinclubbuttons"><a href="https://apps.ideal-logic.com/osusli" target="_blank" rel="noreferrer noopener">IdealLogic</a></button></p>
                Please fill out the registration form <button className="joinclubbuttons"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfR5e-HokAUlhm5e7kltM0cM23Bprycbkk_o4tupGdFckPPkg/viewform?usp=sf_link" target="_blank" rel="noreferrer noopener"> Google Form </a></button>
            </div>
        </>
    );
}


export default Registration
