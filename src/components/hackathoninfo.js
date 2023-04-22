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
                    <p className='orange-body-text'> May 19, 2023 (10 AM PST)</p>
                    <br/>
                    <p className=''> Hacking ends / Project Submission Deadline: </p>
                    <p className='orange-body-text'> May 21, 2023 (8:30 PM PST) </p>
                    <br/>
                    <p className=''> Project Demos / Q&A:</p>
                    <p className='orange-body-text'> No project demos this time. </p>
                    <br/>
                    {/* <p className='officer-and-judge-name'> The next hackathon will be from X to X */}
                    <p className='orange-body-text'>The winners will be announced on X.</p>
                    
                <h2> judges</h2>
                    <br/> 
                    <p className='orange-body-text'>  This hackathon will be judged by other students and hackathon participants. Students will vote on projects ( you are not allowed to vote on your teams project). The team with the most votes will receive the first place prize, the second most votes will receive the second place prize and the third most votes will receive the 3rd place prize! Please see Judging Criteria at the bottom of this page.  </p> 
                    <br/> 

                    
                    {/* <p className='officer-and-judge-name'> name, occupation </p> */}

                <h2> theme </h2>
                    <br/> 
                    <p className='orange-body-text'>LEVERAGING A.I. TOOLS</p> 
                    
                    {/* <p className='officer-and-judge-name'> TBD </p> */}

            </div>
        </>
        
    );
}


export default Info
