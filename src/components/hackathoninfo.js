import React from 'react';

function Info () {

    return (
        <>
            <div className="infobody">
                <h1>spring 2022 hackathon</h1>
                <br/>
                <h2> schedule </h2>

                    <p className=''> Opening Ceremony Kick-off / Hackathon starts!:  </p>
                    <p className='orange-body-text'> Wednesday, March 23rd - 5:00 PM PST (8:00 PM EST) </p>
                    <br/>
                    <p className=''> Hacking ends / Project Submission Deadline: </p>
                    <p className='orange-body-text'> Sunday, March 27th - 3:00 PM PST (6:00 PM EST)</p>
                    <br/>
                    <p className=''> Project Demos / Q&A:</p>
                    <p className='orange-body-text'> Sunday, March 27th - 5:00 PM PST (8:00 PM EST)</p>
                    <br/>
                    {/* <p className='officer-and-judge-name'> The next hackathon will be from X to X */}
                    {/* The winners will be announced on X.</p> */}
                    
                <h2> judges</h2>
                    <p className='orange-body-text'> TBD </p> 
                    
                    {/* <p className='officer-and-judge-name'> name, occupation </p> */}

                <h2> theme </h2>
                    <p className='orange-body-text'> 🎮 Gamification!! 🎮 </p> 
                    
                    {/* <p className='officer-and-judge-name'> TBD </p> */}

            </div>
        </>
        
    );
}


export default Info