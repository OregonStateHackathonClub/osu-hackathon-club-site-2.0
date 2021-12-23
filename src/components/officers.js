import React from 'react';

const Officers = ( {clubInfo} ) => {

    return (
        <div class="infobody">
            <h1> current officers</h1>
            <p> {clubInfo.officers.join(",  ")} </p>
        </div>
    );
}


export default Officers