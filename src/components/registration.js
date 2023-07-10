import React from 'react';

function Registration() {
    return (
        <>
            <div className="infobody">
                <h2>how to register:</h2>
                {/* Update Devpost Link Each Hackathon */}
                <p>To join the next hackathon, sign up for Beaverhacks on <button className="joinclubbuttons"><a href="https://beaverhacks-fall-2023.devpost.com/" target="_blank" rel="noreferrer noopener">DevPost</a></button>, fill out the registration form 
                    <button className="joinclubbuttons"><a href="https://forms.gle/MqQTsKZzbKwTxhWs7" target="_blank" rel="noreferrer noopener"> Google Form </a></button>
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
