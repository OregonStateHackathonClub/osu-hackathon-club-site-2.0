import React from 'react';

function Join( {clubInfo} ) {

    return (
        <div class="infobody">
        <p>           
            Are you a current Oregon State University undergraduate or graduate student (on-campus or ecampus)? Complete the steps below to become an official member of the Hackathon Club!
        </p>
           <h2>STEP 1:</h2> 
                <p> Join the club on </p><button class="joinclubbuttons"><a href="https://apps.ideal-logic.com/osusli">Ideal Logic</a></button> 
            <h2>STEP 2:</h2>
                <p> Join us on <button class="joinclubbuttons"><a href="https://osu-hackathon.slack.com/">Slack</a></button> and/or <button class="joinclubbuttons"><a href="https://discord.gg/FYrjJ7zHGS">Discord</a></button> </p>
        </div>
    );
}


export default Join