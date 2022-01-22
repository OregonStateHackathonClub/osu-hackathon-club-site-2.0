import React from 'react';

function Info ( {currentHackathon}) {

    return (
        <div class="infobody">
            <h1> schedule </h1>
                <p> TBD </p>
                {/* <p> The next hackathon will be from {currentHackathon.startDate}    */}
                {/* to {currentHackathon.endDate} ! The winners will be announced on {currentHackathon.winnersAnnounced}.</p> */}
            <h1> judges</h1>
                <p> {currentHackathon.judges.join(", ")} </p> 
            <h1> theme </h1>
                <p> {currentHackathon.theme}</p> 

        </div>
    );
}


export default Info