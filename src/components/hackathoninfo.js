import React from 'react';

function Info () {

    return (
        <>
            <div className="infobody">
                <h1>Winter 2024 Hobbies</h1>
                
                {/* <img
                    className="carousel-images"
                    src={beaverhackswinter24}
                    alt="Fall 2023 hackathon" />       */}
                <br/>
                <h2> Schedule </h2>
                <br/>                       
                    <p className=''> Hackathon starts!:  </p>
                    <p className='orange-body-text'>March 1st, 2024</p>
                    <br/>
                    <p className=''> Project Submission Deadline: </p>
                    <p className='orange-body-text'>March 3rd, 2024</p>
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
                    <p className='orange-body-text'>Hobbies</p> 
                    
                    {/* <p className='officer-and-judge-name'> TBD </p> */}

            </div>
        </>
        
    );
}


export default Info
