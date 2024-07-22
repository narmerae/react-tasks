"use client";
import React, {useState} from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>you have clicked {count} times</p>
            <button onClick={() => setCount(count + 1) }>CLICK ME</button>
        </div>
    );
}

export default Counter;