import React from 'react';

const Officers = ( {clubInfo} ) => {

    return (
        <>
            <h1> current officers</h1>
            <p> {clubInfo.officers.join(",  ")} </p>
        </>
    );
}


export default Officers