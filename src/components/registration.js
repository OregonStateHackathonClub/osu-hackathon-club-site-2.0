import React from 'react';

function Registration() {
    return (
        <>
            <h2>How To Register:</h2>
            <div className="infobody">
                {/* Update Devpost Link Each Hackathon */}
                <p>To join the next hackathon, sign up for Beaverhacks on <button className="joinclubbuttons"><a href="https://beaverhacks-fall-2023.devpost.com/" target="_blank" rel="noreferrer noopener">DevPost</a></button>, fill out the registration form <button className="joinclubbuttons"><a href="https://forms.gle/MqQTsKZzbKwTxhWs7" target="_blank" rel="noreferrer noopener"> Google Form </a></button> and join the club via <button className="joinclubbuttons"><a href="https://apps.ideal-logic.com/osusli" target="_blank" rel="noreferrer noopener">IdealLogic</a></button></p>

            </div>
        </>
    );
}


export default Registration
