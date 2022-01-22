import React from 'react';

const Officers = ( {clubInfo} ) => {

    return (
        <div class="infobody">
            <h1> current officers</h1>
            <p> President: {clubInfo.President} </p>
            <p> Vice President: {clubInfo.VP} </p>
            <p> Secretary: {clubInfo.Secretary} </p>
            <p> Treasurer: {clubInfo.Treasurer} </p>
            <p> Webmaster: {clubInfo.Webmaster} </p>
            <p> Communication: {clubInfo.Communication} </p>
            <p> Trusted Advisor: {clubInfo.SemiAdvisor} </p>
            <p> Advisor: {clubInfo.Advisor} </p>

        </div>
    );
}


export default Officers