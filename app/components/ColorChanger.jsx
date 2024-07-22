"use client";
import React from 'react';


function ColorChanger() {
    const colors = ['black', 'red', 'green', 'blue'];
    const [colorBoja, setColor] = React.useState(colors[0]);
    const changeColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        setColor(colors[randomIndex]);
    }
    return (
        <div>
            <h1 style={{
                color: colorBoja
            }}>
            DAASDDASDASSAD
            </h1>
            <button onClick={changeColor}>CLICK ME</button>
        </div>
    );
}

export default ColorChanger;