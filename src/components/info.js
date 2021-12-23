import React from 'react';

const Info = ( {currentHackathon}) => {

    return (
        <>
            <h1> schedule </h1>
                <p> The next hackathon will be from {currentHackathon.startDate}   
                to {currentHackathon.endDate} ! The winners will be announced on {currentHackathon.winnersAnnounced}.</p>
            <h1> judges</h1>
                <p> {currentHackathon.judges.join(", ")} </p> 
            <h1> theme </h1>
                <p> {currentHackathon.theme}</p> 

        </>
    );
}


export default Info