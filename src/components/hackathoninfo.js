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
                    <p className='orange-body-text'> January 12,2023 5:00 PM PST</p>
                    <br/>
                    <p className=''> Hacking ends / Project Submission Deadline: </p>
                    <p className='orange-body-text'> January 15, 2023 3:00 PM PST</p>
                    <br/>
                    <p className=''> Project Demos / Q&A:</p>
                    <p className='orange-body-text'> January 15, 2023 5:00 PM PST</p>
                    <br/>
                    {/* <p className='officer-and-judge-name'> The next hackathon will be from X to X */}
                    {<p className='officer-and-judge-name'> The winners will be announced on January 20, 2023 7:00PM PST.</p>}
                    
                <h2> judges</h2>
                    <br/> 
                     <p className='orange-body-text'> John McBride, Software Engineer at Amazon </p>
                     <p className='orange-body-text'> James Yang, Data Scientist at Intel</p>
                     <p className='orange-body-text'> Austin McCalley, Software Engineer at Intel</p>
                     <p className='orange-body-text'> Beth Myre, Software Engineer at Viasat</p>
                     <p className='orange-body-text'> Chris Merill, Software Engineer at Intel</p>
                     <p className='orange-body-text'> Noah Sapse, Incoming Software Engineer at Alteryx</p>
                     <p className='orange-body-text'> Evgeniy Kravtsov, Senior Software Engineer at Sberdevices</p>
                    <br/>   
                    {/* <p className='officer-and-judge-name'>  </p> */}

                <h2> theme </h2>
                    <br/> 
                    <p className='orange-body-text'> The theme will be released the day of the hackathon! </p> 
                    
                    {/* <p className='officer-and-judge-name'> TBD </p> */}

            </div>
        </>
        
    );
}


export default Info
