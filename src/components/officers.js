import React from 'react';

const Officers = ( {clubInfo} ) => {

    return (
        <div className="infobody">
            <h2> current officers</h2>

            <p className='officer-title'> President:</p> 
                <p className='orange-body-text'> {clubInfo.President} </p> 
            <p className='officer-title'> Vice President: </p> 
                <p className='orange-body-text'> {clubInfo.VP} </p> 
            <p className='officer-title'> Secretary: </p>     
                <p className='orange-body-text'> {clubInfo.Secretary}  </p>
            <p className='officer-title'> Treasurer: </p> 
                <p className='orange-body-text'> {clubInfo.Treasurer} </p>
            <p className='officer-title'> Webmaster: </p> 
                <p className='orange-body-text'> {clubInfo.Webmaster} </p>
            <p className='officer-title'> Communication: </p> 
                <p className='orange-body-text'> {clubInfo.Communication} </p>
            <p className='officer-title'> Trusted Advisor: </p> 
                <p className='orange-body-text'> {clubInfo.SemiAdvisor} </p>
            <p className='officer-title'> Advisor: </p> 
                <p className='orange-body-text'> {clubInfo.Advisor} </p>

        </div>
    );
}


export default Officers