"use client";
import React from 'react';

function ShowHideMessage() {
    const [showMessage, setShowMessage] = React.useState(true);
    return (
        <div>
            <button onClick={() => setShowMessage(!showMessage)}>Click me in order to show or hide the message</button>
            {showMessage && <h1>Message go big</h1>}
        </div>
    );
}

export default ShowHideMessage;