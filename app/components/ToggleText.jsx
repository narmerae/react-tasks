"use client";
import React, { useState } from 'react';

function ToggleText() {
    const [textVisibility, setTextVisibility] = useState(true);
    return (
        <div>
            <p>HIIIIII</p>
            <button onClick={() => setTextVisibility(!textVisibility)}>{textVisibility ? 'hide' : 'show'}</button>
            {textVisibility ? "<h1>Shown text</h1>" : null}
        </div>
    );
}

export default ToggleText;