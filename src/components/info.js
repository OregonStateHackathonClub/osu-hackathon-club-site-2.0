import React from 'react';

function Info ( {currentHackathon}) {

    return (
        <>
            <div className="infobody">
                <h2> schedule </h2>
                    <p className='orange-body-text'> TBD </p>
                    
                    {/* <p className='officer-and-judge-name'> The next hackathon will be from X to X */}
                    {/* The winners will be announced on X.</p> */}
                    
                <h2> judges</h2>

                    <p className='orange-body-text'> TBD </p> 
                    
                    {/* <p className='officer-and-judge-name'> name, occupation </p> */}

                <h2> theme </h2>
                    <p className='orange-body-text'> TBD</p> 
                    
                    {/* <p className='officer-and-judge-name'> TBD </p> */}

            </div>
        </>
        
    );
}


export default Info