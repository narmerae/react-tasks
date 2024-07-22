"use client";
import React from 'react';


function WelcomeMessage() {
    const [inputValue, setInputValue] = React.useState("");

    const onChangeHandler = event => {
        setInputValue(event.target.value);
    };
    return (
        <div>
            <input
                type="text"
                name="name"
                onChange={onChangeHandler}
                value={inputValue}
            />
            {inputValue!=="" ? <div>{inputValue}</div> : null}
        </div>
    );
}

export default WelcomeMessage;