import React from 'react';

function Info ( {currentHackathon}) {

    return (
        <>
            <div className="infobody">
                <h2> schedule </h2>
                    <p> TBD </p>
                    {/* <p> The next hackathon will be from {currentHackathon.startDate}    */}
                    {/* to {currentHackathon.endDate} ! The winners will be announced on {currentHackathon.winnersAnnounced}.</p> */}
            </div>
            <div className="infobody">
                <h2> judges</h2>
                    <p> {currentHackathon.judges.join(", ")} </p> 
            </div>
            <div className="infobody">
                <h2> theme </h2>
                    <p> {currentHackathon.theme}</p> 
            </div>
        </>
        
    );
}


export default Info