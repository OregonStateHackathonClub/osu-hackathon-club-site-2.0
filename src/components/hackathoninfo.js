import React from 'react';
import fall2022poster from '../images/fall2022poster(new).png'

function Info () {

    return (
        <>
            <div className="infobody">
                <h1>Fall 2022 Hackathon</h1>
                 <img
                  className="carousel-images"
                  src={fall2022poster(new)}
                  alt="fall 2022 hackathon"/>
                      
                <br/>
                <h2> schedule </h2>
                <br/>                       
                    <p className=''> Opening Ceremony Kick-off / Hackathon starts!:  </p>
                    <p className='orange-body-text'> Thursday, October 6th - 5:00 PM PST (8:00 PM EST) </p>
                    <br/>
                    <p className=''> Hacking ends / Project Submission Deadline: </p>
                    <p className='orange-body-text'> Sunday, October 9th - 3:00 PM PST (6:00 PM EST)</p>
                    <br/>
                    <p className=''> Project Demos / Q&A:</p>
                    <p className='orange-body-text'> Sunday, October 9th - 5:00 PM PST (8:00 PM EST)</p>
                    <br/>
                    {/* <p className='officer-and-judge-name'> The next hackathon will be from X to X */}
                    {/* The winners will be announced on X.</p> */}
                    
                <h2> judges</h2>
                    <br/> 
                    <p className='orange-body-text'>  David Rider @ Microsoft, Software Engineer</p> 
                    <br/> 
                    <p className='orange-body-text'>   Nate Kimball @ Microsoft, Software Engineer</p> 
                    <br/> 
                    <p className='orange-body-text'>  Jonah Spencer @ GitHub, Software Engineer</p> 
                    <br/> 
                    <p className='orange-body-text'>  Zaki Ahmed @ Amazon, Software Engineer</p> 
                    <br/> 
                    <p className='orange-body-text'>  Aaron Ennis @ Verizon, Software Engineer</p> 
                    <br/> 
                    <p className='orange-body-text'>  Wilkins White @ Daxbot, Senior Firmware Engineer</p> 
                    <br/> 
                        <p className='orange-body-text'> Jacob Eckroth @ Amazon, Software Engineer</p> 
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
