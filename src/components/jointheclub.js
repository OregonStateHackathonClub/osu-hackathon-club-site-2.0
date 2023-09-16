import React from 'react';

function Join() {

    return (
        <div className="infobody">
            <h1>Join the club:</h1>
            <p>           
            Are you a current Oregon State University undergraduate or graduate student (on-campus or ecampus)? Complete the steps below to become an official member of the Hackathon Club!
        </p>
           <h2>Step 1:</h2> 
                <p> Join the club on <button className="joinclubbuttons"><a href="https://apps.ideal-logic.com/osusli" target="_blank" rel="noreferrer noopener">Ideal Logic</a></button> 
            </p>
            <h2>Step 2:</h2>
                <p> 
                Join us on <button className="joinclubbuttons"><a href="https://discord.gg/FYrjJ7zHGS" target="_blank" rel="noreferrer noopener">Discord</a></button> 
                </p>
        </div>
    );
}


export default Join
