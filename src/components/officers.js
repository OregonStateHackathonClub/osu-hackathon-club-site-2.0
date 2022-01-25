import React from 'react';

const Officers = ( {clubInfo} ) => {

    return (
        <div className="infobody">
            <h2> current officers</h2>

            <p className='officer-title'> President:</p> 
                <p className='officer-name'> {clubInfo.President} </p> 
            <p className='officer-title'> Vice President: </p> 
                <p className='officer-name'> {clubInfo.VP} </p> 
            <p className='officer-title'> Secretary: </p>     
                <p className='officer-name'> {clubInfo.Secretary}  </p>
            <p className='officer-title'> Treasurer: </p> 
                <p className='officer-name'> {clubInfo.Treasurer} </p>
            <p className='officer-title'> Webmaster: </p> 
                <p className='officer-name'> {clubInfo.Webmaster} </p>
            <p className='officer-title'> Communication: </p> 
                <p className='officer-name'> {clubInfo.Communication} </p>
            <p className='officer-title'> Trusted Advisor: </p> 
                <p className='officer-name'> {clubInfo.SemiAdvisor} </p>
            <p className='officer-title'> Advisor: </p> 
                <p className='officer-name'> {clubInfo.Advisor} </p>

        </div>
    );
}


export default Officers