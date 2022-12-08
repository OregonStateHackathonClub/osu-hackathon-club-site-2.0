import React from 'react';
import beaverhackswinter23 from '../images/beaverhackswinter23.png'

function Info () {

    return (
        <>
            <div className="infobody">
                <h1>Winter 2023 Hackathon</h1>
                 <img
                  className="carousel-images"
                  src={beaverhackswinter23}
                  alt="Winter 2023 hackathon"/>
                      
                <br/>
                <h2> schedule </h2>
                <br/>                       
                    <p className=''> Opening Ceremony Kick-off / Hackathon starts!:  </p>
                    <p className='orange-body-text'> TBD </p>
                    <br/>
                    <p className=''> Hacking ends / Project Submission Deadline: </p>
                    <p className='orange-body-text'> TBD</p>
                    <br/>
                    <p className=''> Project Demos / Q&A:</p>
                    <p className='orange-body-text'> TBD </p>
                    <br/>
                    {/* <p className='officer-and-judge-name'> The next hackathon will be from X to X */}
                    {/* The winners will be announced on X.</p> */}
                    
                <h2> judges</h2>
                    <br/> 
                    <p className='orange-body-text'>  TBD </p> 
                    <br/> 

                    
                    {/* <p className='officer-and-judge-name'> name, occupation </p> */}

                <h2> theme </h2>
                    <br/> 
                    <p className='orange-body-text'> Life Hackathon!! </p> 
                    
                    {/* <p className='officer-and-judge-name'> TBD </p> */}

            </div>
        </>
        
    );
}


export default Info
