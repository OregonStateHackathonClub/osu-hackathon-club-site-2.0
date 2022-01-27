import React from 'react';

function Join() {

    return (
        <div className="infobody">
        <p>           
            Are you a current Oregon State University undergraduate or graduate student (on-campus or ecampus)? Complete the steps below to become an official member of the Hackathon Club!
        </p>
           <h2>step 1:</h2> 
                <p> Join the club on </p>
                <button className="joinclubbuttons"><a href="https://apps.ideal-logic.com/osusli" target="_blank" rel="noreferrer noopener">Ideal Logic</a></button> 
            <h2>step 2:</h2>
                <p> 
                Join us on 
                <button className="joinclubbuttons"><a href="https://osu-hackathon.slack.com/" target="_blank" rel="noreferrer noopener">Slack</a></button>
                and/or 
                <button className="joinclubbuttons"><a href="https://discord.gg/FYrjJ7zHGS" target="_blank" rel="noreferrer noopener">Discord</a></button> 
                </p>
        </div>
    );
}


export default Join