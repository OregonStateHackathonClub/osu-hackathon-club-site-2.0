import React from 'react';
import spring2023squarelogo from '../images/spring2023squarelogo.png'

function Info () {

    return (
        <>
            <div className="infobody">
                <h1>Spring 2023 Hackathon</h1>
                 <img
                  className="carousel-images"
                  src={spring2023squarelogo}
                  alt="Spring 2023 hackathon"/>
                      
                <br/>
                <h2> schedule </h2>
                <br/>                       
                    <p className=''> Opening Ceremony Kick-off / Hackathon starts!:  </p>
                    <p className='orange-body-text'> January 12,2023 </p>
                    <br/>
                    <p className=''> Hacking ends / Project Submission Deadline: </p>
                    <p className='orange-body-text'> January 15, 2023</p>
                    <br/>
                    <p className=''> Project Demos / Q&A:</p>
                    <p className='orange-body-text'> January 15, 2023 </p>
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
                    <p className='orange-body-text'> The theme will be released the day of the hackathon! </p> 
                    
                    {/* <p className='officer-and-judge-name'> TBD </p> */}

            </div>
        </>
        
    );
}


export default Info
