import React from 'react';

function Registration({ currentHackathon }) {
    return (
        <div class="infobody">
            <h1>How to Register:</h1>
            <p>Sign up on Beaverhacks Fall 2021 on <button class="joinclubbuttons"><a href={currentHackathon.linkToDevPost}>DevPost</a></button>.</p>
            <h1>Find your Team: </h1>
            <p>Use <button class="joinclubbuttons"><a href={currentHackathon.linkToDevPost}>DevPost</a></button>, <button class="joinclubbuttons"><a href="https://discord.gg/pCesGNGjPc">Discord</a></button>, or <button class="joinclubbuttons"><a href="https://osu-hackathon.slack.com/">Slack</a></button> to find teammates.</p>
        </div>
    );
}


export default Registration