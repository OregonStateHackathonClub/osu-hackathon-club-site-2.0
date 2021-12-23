import React from 'react';

function Join( {clubInfo} ) {

    return (
        <div class="infobody">
        <p>           
            Are you a current Oregon State University undergraduate or graduate student (on-campus or ecampus)? Complete the steps below to become an official member of the Hackathon Club!
        </p>
           <h2>STEP 1:</h2> 
                <button class="joinclubbuttons"><a href="https://docs.google.com/forms/d/e/1FAIpQLScx22ZBUYUFZX-JszQP3L4f_TQGtrEX7BC8xoki-iuWmwvvEQ/viewform">Fill out the google form</a></button>
            <h2>STEP 2:</h2>
                <button class="joinclubbuttons"><a href="https://apps.ideal-logic.com/osusli">Join the club on Ideal Logic</a></button>
            <h2>STEP 3:</h2>
                <button class="joinclubbuttons"><a href="https://osu-hackathon.slack.com/">Join us on Slack</a></button>
        </div>
    );
}


export default Join