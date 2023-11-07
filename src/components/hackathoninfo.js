import React from 'react';

function Info () {

    return (
        <>
            <div className="infobody">
                <h1>Google Hacks</h1>
                <p>Hosted with <a href="https://gdsc.community.dev/oregon-state-university/">Google Developer Student Club at OSU!</a></p>
                
                {/* <img
                    className="carousel-images"
                    src={beaverhackswinter24}
                    alt="Fall 2023 hackathon" />       */}
                <br/>
                <h2> Schedule </h2>
                <br/>                       
                    <p className=''> Opening Ceremony Kick-off / Hackathon starts!:  </p>
                    <p className='orange-body-text'>November 17th, 2023</p>
                    <br/>
                    <p className=''> Hacking ends / Project Submission Deadline: </p>
                    <p className='orange-body-text'>TBA</p>
                    <br/>
                    <p className=''> Winners Announced:</p>
                <p className='orange-body-text'>TBA</p>
                    <br/>
                    {/* <p className='officer-and-judge-name'> The next hackathon will be from X to X */}
                    <p className='orange-body-text'></p>
                    
                <h2> Judges</h2>
                    <br/> 
                    <p className='orange-body-text'>TBA </p> 
                    <br/> 

                    
                    {/* <p className='officer-and-judge-name'> name, occupation </p> */}

                <h2> Theme </h2>
                    <br/> 
                    <p className='orange-body-text'>Google Technologies</p> 
                    
                    {/* <p className='officer-and-judge-name'> TBD </p> */}

            </div>
        </>
        
    );
}


export default Info
