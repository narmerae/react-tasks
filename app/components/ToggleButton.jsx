"use client";
import React from 'react';

function ToggleButton() {
    const [toggleButton, setToggleButton] = React.useState(true);
    return (
        <div>
            <h1>Button go boom</h1>
            <button onClick={() => setToggleButton(!toggleButton)}>Button that hides a button</button>
            {toggleButton && <button>hi</button>}
        </div>
    );
}

export default ToggleButton;