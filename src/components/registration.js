import React from 'react';

function Registration({ currentHackathon }) {
    return (
        <div class="infobody">
            <h1>How to Register:</h1>
            <p>Sign up on Beaverhacks Fall 2021 on <a href={currentHackathon.linkToDevPost}>DevPost</a>.</p>
            <h1>Find your Team: </h1>
            <p>Use DevPost, Discord, or Slack to find teammates.</p>
        </div>
    );
}


export default Registration