import React from 'react';
import spring2023squarelogo from '../images/spring2023squarelogo.png'

function Info () {

    return (
        <>
        <img src="spring2023squarelogo.png" alt="current Spring 23 Hackathon Flyer" style="width: 100%; height: auto;">

            <div className="infobody">
           
                <h2> schedule </h2>
                <br/>                       
                    <p className=''> Opening Ceremony Kick-off / Hackathon starts!:  </p>
                    <p className='orange-body-text'> To be announced</p>
                    <br/>
                    <p className=''> Hacking ends / Project Submission Deadline: </p>
                    <p className='orange-body-text'> To be announced</p>
                    <br/>
                    <p className=''> Project Demos / Q&A:</p>
                    <p className='orange-body-text'> To be announced</p>
                    <br/>
                    {/* <p className='officer-and-judge-name'> The next hackathon will be from X to X */}

                <h2> judges</h2>
                    <br/> 
                     <p className='orange-body-text'> To be announced</p>

                    <br/>   
                    {/* <p className='officer-and-judge-name'>  </p> */}

                <h2> theme </h2>
                    <br/> 
                    <p className='orange-body-text'> To be announced </p> 
                    
                    {/* <p className='officer-and-judge-name'> TBD </p> */}

            </div>
        </>
        
    );
}


export default Info
