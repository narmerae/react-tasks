"use client";
import React from 'react';

function UserProfile() {
    const [object, setObject] = React.useState({
        name:"default",
        email: "default@example.com",
        password: "default",
    });

    const onChangeHandler = event => {
        const {name, email, password, value} = event.target;
        setObject(prevState => ({
            ...prevState,
            [name]: value,
            [email]: value,
            [password]: value,
        }));
    }
    return (
        <div>
            <p>This is {object.name}</p>
            <p>This is {object.email}</p>
            <p>This is {object.password}</p>
            <input onChange={onChangeHandler} type={"text"} name="name" value={object.name}/>
            <input onChange={onChangeHandler} type={"text"} name="email" value={object.email}/>
            <input onChange={onChangeHandler} type={"text"} name="password" value={object.password}/>
        </div>
    );
}

export default UserProfile;