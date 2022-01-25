import React from 'react';

function Registration({ currentHackathon }) {
    return (
        <>
            <div className="infobody">
                <h2>how to register:</h2>
                <p>To join the next hackathon, sign up for Beaverhacks on <button className="joinclubbuttons"><a href={currentHackathon.linkToDevPost} target="_blank" rel="noreferrer noopener">DevPost</a></button> and join the club via <button className="joinclubbuttons"><a href="https://apps.ideal-logic.com/osusli" target="_blank" rel="noreferrer noopener">IdealLogic</a></button></p>

            </div>
            <div className="infobody">
                <h2>find your team: </h2>
                <p>Use <button className="joinclubbuttons"><a href={currentHackathon.linkToDevPost} target="_blank" rel="noreferrer noopener">DevPost</a></button>, <button className="joinclubbuttons"><a href="https://discord.gg/pCesGNGjPc" target="_blank" rel="noreferrer noopener">Discord</a></button>, or <button className="joinclubbuttons"><a href="https://osu-hackathon.slack.com/" target="_blank" rel="noreferrer noopener">Slack</a></button> to find teammates.</p>
            </div>
        </>
    );
}


export default Registration